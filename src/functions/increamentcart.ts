export function increamentCart(element: HTMLElement): void {
  let amount: number = parseInt(element.textContent);
  amount++;
  element.textContent = `${amount}`;
}
