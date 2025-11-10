const size = Number(process.argv[2]);

if (isNaN(size) || size < 2) {
  console.log("Missing Number");
} else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
