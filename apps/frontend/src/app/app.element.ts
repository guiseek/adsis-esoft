import userTableRow from './user/user-table-row.element.html?raw';
import template from './app.element.html?raw';

import { provider } from '@adsis-esoft/shared/util-provider';
import { UserFacade } from '@adsis-esoft/user/data-access';
import { swap, swapMany } from './core';
import './app.element.scss';

export class AppElement extends HTMLElement {
  userFacade = provider.use(UserFacade);

  async connectedCallback() {
    this.innerHTML = swap(template, 'title', 'ADSis & ESoft');

    this.handleUsersTemplate();

    this.userFacade.loadUsers();
  }

  handleUsersTemplate() {
    const usersEl = this.querySelector<HTMLElement>('#users')!;

    this.userFacade.users$.subscribe((users) => {
      usersEl.innerHTML = swap(usersEl.innerHTML, 'total', users.length);

      const usersCard = usersEl.querySelector<HTMLElement>('section');
      if (usersCard) usersCard.innerHTML += swapMany(userTableRow, users);
    });
  }
}
customElements.define('adsis-esoft-root', AppElement);
