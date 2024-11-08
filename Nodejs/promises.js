const doWork = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve('Work done!'), 1000);
    });
  
  doWork().then(console.log);
  