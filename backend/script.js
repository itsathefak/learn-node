let n = 5;

for (let i = 0; i < 5; i++) {
  console.log("Hello ", i);
}

let argv = process.argv;

for (let i = 2; i <= argv.length; i++) {
  console.log("Hello to", argv[i]);
}
