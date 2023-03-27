const button = document.querySelector('button')!;

const add = function (n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
};

const clickEvent = function (message: string) {
  console.log('Clicked! ' + message);
};

button.addEventListener('click', clickEvent.bind(null, 'Hi!'));
