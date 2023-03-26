import { UserDataService, UserMockService, UserService } from './user/services';
import { HttpService, Service } from '@adsis-esoft/common/data-access';
import { Token, provider } from '@adsis-esoft/common/utilities';
import userTableRow from './user/user-table-row.element.html?raw';
import template from './app.element.html?raw';
import { swap, swapMany } from './core';
import { env } from '../envs/env';
import './app.element.scss';

/* @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @
 *
 * Injeção de dependência / Inversão de controle
 *
 * É aqui que a arquitetura da aplicação começa
 * a fazer diferença de verdade em refatorações
 *
 * @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ @ */

const API_TOKEN = new Token('api.token');

/**
 * Ao adicionar um provider temos
 * A classe abstrata, que será usada em toda aplicação,
 * porém, ela não implementa código nenhum, trata-se
 * apenas de um simbolo usado, que quando solicitado
 * retorna quem realmente faz o trabalho de fato
 *
 * Neste caso, toda vez que eu solicitar API_TOKEN,
 * na verdade ele me entregará a string '/api'
 *
 * Tem também um terceiro parâmetro é usado pra,
 * dependências ou seja, coisas que o provider
 * precisa em seu construtor, e neste caso
 * é a URL da API que foi configurada aqui 👇
 * e utilizada logo mais abaixo
 */

// URL da API REST
provider.add(API_TOKEN, '/api');

/**
 * Neste caso, toda vez que eu solicitar Service,
 * na verdade ele me entregará o HttpService e,
 * HttpService precisa da url da api no construtor
 *
 * ```example
 * class HttpService<T> implements Service<T> {
 *                       👇
 *   constructor(private api: string) {}
 * }
 * ```
 */
provider.add(Service, HttpService, [API_TOKEN]);

/**
 * Sem querer deixar as coisas mais complexas, mas
 * aqui é apenas uma verificação pra checar se está
 * sendo executada em produção ou não e então decidir
 * se usaremos uma classe que trabalha com dados fakes
 * ou realmente fará uma requisição http pra API REST
 *
 * Faça um teste, remove a ! do env.production logo
 * ali abaixo, salve e veja a mudança na tela
 *                     aqui👇 */
const UserServiceConcrete = !env.production ? UserDataService : UserMockService;
provider.add(UserService, UserServiceConcrete, [Service]);

/**
 * E por fim, aqui pegamos quem realmente importa
 * o UserService, que não implementa nada e na
 * verdade estou usando o UserDataService ou
 * UserMockService, que não sabe se estamos usando
 * Http ou Socket ou seja lá o que for, isso é
 * responsabilidade do Service, os Services
 * específicos de entidades só se preocupam em
 * solicitar os registros pra chegar até a tela
 */
const userService = provider.use(UserService);

/* -- ---- ---- ---- ---- ---- ---- ---- --- */

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  async connectedCallback() {
    let tmpl = swap(template, 'title', 'ADSis & ESoft');

    const data = await fetch('/api').then((res) => res.json());
    this.innerHTML = swap(tmpl, 'response', data.message);

    const usersEl = this.querySelector<HTMLElement>('#users')!;

    /**
     * Aqui fazemos o findAll() e temos nossos usuários,
     * não importa quais sejam e nem como chegam até aqui
     */
    userService.findAll().subscribe((users) => {
      usersEl.innerHTML = swap(usersEl.innerHTML, 'total', users.length);
      const usersCard = usersEl.querySelector<HTMLElement>('section');
      if (usersCard) usersCard.innerHTML += swapMany(userTableRow, users);
    });

    /**
     * Mas onde está a grande vantagem nisso?
     *
     * Imagine uma grande aplicação que tem mais
     * de 200 classes de Services espalhadas por
     * mais de 1000 componentes e estes Services
     * estão usando Http direto em todas eles
     *
     * Caso haja necessidade de mudar de Http
     * pra outra forma de comunicação, seria
     * necessário mudar isso em todas as 200
     * classes e mais de 1000 componentes
     *
     * Não é só trabalhoso, na maioria das vezes
     * a migração não acontece pq isso faria toda
     * produção parar por conta de tamanha mudança
     *
     * E desta forma, bastaria fazer algo como isso
     *
     * ```example
     * Enquanto usar API REST use 👇
     * provider.add(Service, HttpService, [API_TOKEN]);
     *
     * Em migração pra Socket use 👇
     * provider.add(Service, SocketService, [API_TOKEN]);
     *
     * E pronto, todos os Services da aplicação agora
     * receberão o SocketService no lugar do Service 😊
     * ```
     */
  }
}
customElements.define('adsis-esoft-root', AppElement);
