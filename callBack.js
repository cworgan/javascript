const doSomething = (cb) => {
      console.log('Doing something...');
      cb();
    };

const nextStep = () => {
    console.log('Callback called');
    };
    doSomething(nextStep);