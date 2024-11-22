export const snippets = {
  javascript: [
    `const add = (a, b) => a + b;
console.log(add(2, 3));`,

    `function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}`,
  ],

  python: [
    `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b`,

    `def reverse_string(s):
    return s[::-1]`,
  ],

  java: [
    `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,

    `class Factorial {
    int calculate(int n) {
        if (n == 0) return 1;
        return n * calculate(n - 1);
    }
}`,
  ],

  c: [
    `#include <stdio.h>
int main() {
    printf("Hello, World!");
    return 0;
}`,

    `int factorial(int n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
}`,
  ],

  go: [
    `package main
import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,

    `func factorial(n int) int {
    if n == 0 {
        return 1
    }
    return n * factorial(n-1)
}`,
  ],
};
