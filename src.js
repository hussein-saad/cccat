const fs = require('fs');

function handleFiles() {
  const files = [];
  for (let i = 2; i < process.argv.length; i++) {
    files.push(process.argv[i]);
  }
  const output = [];
  for (const file of files) {
    try {
      const fileContent = fs.readFileSync(file, 'utf8');
      output.push(fileContent);
    } catch (err) {
      console.log('Error reading file', err.message);
    }
  }

  return output.join('');
}

function handleStdin(data) {
  if (process.argv[2] === '-') {
    return data.toString();
  } else if (process.argv[2] === '-n') {
    const lines = data.toString().split('\n');
    const output = [];
    for (let i = 0; i < lines.length - 1; i++) {
      output.push(`${i + 1} ${lines[i]}`);
    }
    return output.join('\n');
  } else if (process.argv[2] === '-b') {
    const lines = data.toString().split('\n');
    const output = [];
    let counter = 1;
    for (let i = 0; i < lines.length - 1; i++) {
      if (lines[i] === '') {
        output.push(lines[i]);
      } else {
        output.push(`${counter} ${lines[i]}`);
        counter++;
      }
    }
    return output.join('\n');
  } else {
    return 'Invalid argument';
  }
}

if (
  process.argv.length === 2 ||
  (process.argv.length === 3 &&
    (process.argv[2] === '-' ||
      process.argv[2] === '-n' ||
      process.argv[2] === '-b'))
) {
  process.stdin.on('data', (data) => {
    console.log(handleStdin(data, process.argv[2]));
    process.exit(0);
  });
} else {
  console.log(handleFiles());
}
