import { AbstractType, TypeOf } from './types';

/**
 * Dependency Injection Principle
 * Princípio da inversão de controle
 */

// Container de dependências
const container = new Map();

/**
 * Registra dependências
 *
 * @param type {AbstractType<T>} Abstração
 * @param concrete {TypeOf<T>} Classe responsável
 */
export function setProvider<T>(type: AbstractType<T>, concrete: TypeOf<T>) {
  container.set(type, concrete);
}

/**
 * Solicita uma dependência
 * @param type {AbstractType<T>} Abstração
 * @returns {T} Classe responsável
 */
export function useProvider<T>(type: AbstractType<T>): T {
  const concrete = container.get(type);

  if (!concrete) {
    throw new Error(`O tipo provider ${type.name} não foi registrado`);
  }

  return new concrete();
}
