const asyncFunc = async () => {
    const result = await Promise.resolve('Async Result');
    console.log(result);
  };
  
  asyncFunc();
  