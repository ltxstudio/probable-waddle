export const snippets = {
  javascript: [
    "const greet = (name) => `Hello, ${name}`;\nconst userName = 'John';\nconsole.log(greet(userName));\n\nfunction fibonacci(n) {\n  let a = 0, b = 1;\n  for (let i = 2; i <= n; i++) {\n    let temp = a + b;\n    a = b;\n    b = temp;\n  }\n  return b;\n}\nconsole.log(fibonacci(10));",
    "console.log('Typing speed test!');\nconst numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((acc, num) => acc + num, 0);\nconsole.log(`Sum: ${sum}`);\n\nconst isEven = (num) => num % 2 === 0;\nconsole.log(isEven(4));",
  ],
  python: [
    "def greet(name):\n    return f'Hello, {name}'\n\nuser_name = 'Alice'\nprint(greet(user_name))\n\n# Fibonacci sequence\n\ndef fibonacci(n):\n    a, b = 0, 1\n    for _ in range(2, n):\n        a, b = b, a + b\n    return b\n\nprint(fibonacci(10))",
    "print('Typing speed test!')\n\nnumbers = [1, 2, 3, 4, 5]\nsum_numbers = sum(numbers)\nprint(f'Sum: {sum_numbers}')\n\ndef is_even(num):\n    return num % 2 == 0\n\nprint(is_even(6))",
  ],
  c: [
    "#include <stdio.h>\n#include <math.h>\n\nint factorial(int n) {\n    int result = 1;\n    for (int i = 1; i <= n; i++) {\n        result *= i;\n    }\n    return result;\n}\n\nint main() {\n    printf(\"Factorial of 5: %d\\n\", factorial(5));\n    printf(\"Square root of 25: %.2f\\n\", sqrt(25));\n    return 0;\n}",
  ],
  java: [
    "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n        int sum = 0;\n        for (int i = 1; i <= 5; i++) {\n            sum += i;\n        }\n        System.out.println(\"Sum: \" + sum);\n    }\n\n    public static int factorial(int n) {\n        int result = 1;\n        for (int i = 1; i <= n; i++) {\n            result *= i;\n        }\n        return result;\n    }\n}",
  ],
  go: [
    "package main\nimport \"fmt\"\n\nfunc greet(name string) string {\n    return fmt.Sprintf(\"Hello, %s!\", name)\n}\n\nfunc main() {\n    userName := \"Bob\"\n    fmt.Println(greet(userName))\n\n    sum := 0\n    for i := 1; i <= 5; i++ {\n        sum += i\n    }\n    fmt.Println(\"Sum of 1 to 5:\", sum)\n}",
  ],
};
