import { HttpAjaxService, Service } from '@adsis-esoft/common/data-access';
import { Token, provider } from '@adsis-esoft/common/utilities';
import { UserDataService, UserService } from './user/services';

/**
 * Injeção de dependência / Inversão de controle
 * podemos começar criando os identificadores e
 * implementadores, os relacionando e informando
 * quais dependências serão necessárias para uso
 */

/**
 * Cria um identificador para URL da API REST
 */
const API_TOKEN = new Token('api.token');

/**
 * Registra a URL da API REST
 */
provider.add(API_TOKEN, '/api');

/**
 * Reistra Service como identificador e coloca
 * HttpAjaxService como implementação para uso
 * Informa API_TOKEN como dependência para que
 * HttpAjaxService funcione corretamente
 */
provider.add(Service, HttpAjaxService, [API_TOKEN]);

// Para substituição de implementação trocamos
// provider.add(Service, HttpFetchService, [API_TOKEN]);

/**
 * Reistra UserService como identificador e
 * UserDataService como implementação atual
 * Informa Service como dependência exigida
 * para que UserDataService possa funcionar
 */
provider.add(UserService, UserDataService, [Service]);

// Para substituição de implementação para Mock de testes
// provider.add(UserService, UserMockService, [Service]);
