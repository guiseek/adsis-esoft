export function swap(template: string, token: string, value: string | number) {
  return template.replace(new RegExp(`{{${token}}}`, 'ig'), `${value}`);
}
