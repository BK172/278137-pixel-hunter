export default (data) => {
  return `
    <ul class="stats">
      ${data.map((item) => {
    return `<li class="stats__result stats__result--${item}"></li>`;
  }).join(``)}
    </ul>
  `;
};
