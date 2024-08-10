# cccat

This project is a simple text processing tool that reads input from either standard input (stdin) or files and processes the text based on the provided arguments.

## Features

- Read text from stdin or files.
- Process text with the following options:
  - `-`: Output the text as is.
  - `-n`: Number all output lines.
  - `-b`: Number non-empty output lines.

## Usage

### Reading from stdin

To read from stdin, use one of the following commands:

```sh
node src.js -
node src.js -n
node src.js -b
```

### Reading from files

To read from files, provide the file names as arguments:

```sh
node src.js file1.txt file2.txt ...
```

### Examples

#### Example with stdin

```sh
echo "Hello\nWorld" | node src.js -
```

Output:

```
Hello
World
```

```sh
echo "Hello\n\nWorld" | node src.js -b
```

Output:

```
1 Hello

2 World
```

#### Example with files

Assuming test.txt contains:

```
hello world
```

```sh
node src.js tests/test.txt
```

output:

```
hello world
```

## Acknowledgements

This project was created for a coding challenge. You can learn more about it [here](https://codingchallenges.fyi/).


