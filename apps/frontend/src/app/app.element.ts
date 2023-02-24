import { UserDataService, UserMockService, UserService } from './user/services';
import userTableRow from './user/user-table-row.element.html?raw';
import template from './app.element.html?raw';
import { swap, swapMany } from './core';
import { env } from '../envs/env';
import './app.element.scss';
import { setProvider, useProvider } from '@adsis-esoft/common/utilities';

setProvider(UserService, !env.production ? UserDataService : UserMockService);

const userService = useProvider(UserService);

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  async connectedCallback() {
    let tmpl = swap(template, 'title', 'frontend');

    const data = await fetch('/api').then((res) => res.json());

    this.innerHTML = swap(tmpl, 'response', data.message);

    const tbody = this.querySelector<HTMLTableSectionElement>('#users tbody');

    userService.findAll().then((users) => {
      if (tbody) tbody.innerHTML = swapMany(userTableRow, users);
    });
  }
}
customElements.define('adsis-esoft-root', AppElement);
