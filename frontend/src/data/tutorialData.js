const tutorialData = {
    c: {
        name: "C Programming",
        topics: {
            introduction: {
                title: "Introduction to C",
                html: `
  <h2>Introduction to C Programming</h2>
  <p>C is a general-purpose, procedural computer programming language developed in 1972 by Dennis Ritchie at Bell Labs. It has since become one of the most widely used programming languages of all time, particularly in systems programming and embedded systems.</p>

  <h3>Features of C</h3>
  <ul>
    <li><strong>Simple & Efficient:</strong> C is close to the hardware and offers fast performance with minimal overhead.</li>
    <li><strong>Mid-Level Language:</strong> Combines features of both high-level and low-level languages.</li>
    <li><strong>Portable:</strong> C programs can be compiled and run on different machines with minimal or no modification.</li>
    <li><strong>Modular:</strong> Code can be broken down into reusable functions or modules.</li>
    <li><strong>Rich Library:</strong> C provides a rich set of built-in functions and operators.</li>
  </ul>

  <h3>What is C Used For?</h3>
  <ul>
    <li>Operating Systems (e.g., Unix, Linux Kernel)</li>
    <li>Embedded Systems (e.g., microcontroller programming)</li>
    <li>System-Level Programming</li>
    <li>Compilers and Interpreters</li>
    <li>Desktop Applications and Games</li>
  </ul>

  <h3>Basic Structure of a C Program</h3>
  <pre><code>#include &lt;stdio.h&gt;

int main() {
  printf("Hello, World!\\n");
  return 0;
}</code></pre>

  <p><strong>Explanation:</strong></p>
  <ul>
    <li><code>#include &lt;stdio.h&gt;</code>: Preprocessor directive to include the Standard Input Output library.</li>
    <li><code>int main()</code>: Entry point of every C program.</li>
    <li><code>printf()</code>: Function to print output to the screen.</li>
    <li><code>return 0;</code>: Terminates the main function and returns 0 to the OS.</li>
  </ul>

  <h3>Compilation and Execution</h3>
  <ol>
    <li><strong>Write:</strong> Save the code in a file with .c extension (e.g., <code>hello.c</code>).</li>
    <li><strong>Compile:</strong> Use a C compiler like <code>gcc hello.c -o hello</code></li>
    <li><strong>Run:</strong> Execute the compiled program using <code>./hello</code></li>
  </ol>

  <h3>Why Learn C?</h3>
  <ul>
    <li>Understanding of memory management, pointers, and system-level resources</li>
    <li>Forms the foundation for learning C++, Java, and other modern languages</li>
    <li>High performance in time-critical applications</li>
    <li>Widely used in real-world systems and embedded devices</li>
  </ul>

  <h3>Real-World Applications</h3>
  <ul>
    <li><strong>Operating Systems:</strong> Linux, Unix, Windows Kernel</li>
    <li><strong>Database Engines:</strong> MySQL, Oracle Database</li>
    <li><strong>Compilers:</strong> GCC, Clang</li>
    <li><strong>Embedded Systems:</strong> IoT devices, automotive firmware</li>
  </ul>

  <h3>Conclusion</h3>
  <p>Learning C not only helps you become a better programmer but also gives you deep insights into how software interacts with hardware. It's a must-learn for anyone serious about computer science and engineering.</p>
`,
            },
            variables: {
                title: "Variables in C",
                html: `
    <h2>Variables in C</h2>
    <p>In C, a <strong>variable</strong> is a name given to a memory location that stores a value. Variables are used to hold data that can be modified during program execution.</p>

    <h3>Why Use Variables?</h3>
    <ul>
      <li>To store user input or temporary values</li>
      <li>To perform calculations and store results</li>
      <li>To improve code readability and reusability</li>
    </ul>

    <h3>Variable Declaration</h3>
    <p>A variable must be declared before it is used in the program.</p>
    <pre><code>datatype variableName;</code></pre>
    <p>You can also assign an initial value at the time of declaration:</p>
    <pre><code>int age = 25;</code></pre>

    <h3>Declaration Rules</h3>
    <ul>
      <li>Variable names must start with a letter (A-Z, a-z) or underscore (_)</li>
      <li>They can contain letters, digits, and underscores (e.g., <code>total_1</code>)</li>
      <li>They must not be any of the C reserved keywords (e.g., <code>int</code>, <code>return</code>)</li>
      <li>They are case-sensitive (e.g., <code>Age</code> and <code>age</code> are different)</li>
    </ul>

    <h3>Common Data Types</h3>
    <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr style="background-color: #1a1a1a; color: cyan;">
          <th>Type</th>
          <th>Example</th>
          <th>Use</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>int</code></td>
          <td><code>int age = 30;</code></td>
          <td>Integer values</td>
        </tr>
        <tr>
          <td><code>float</code></td>
          <td><code>float pi = 3.14;</code></td>
          <td>Decimal numbers</td>
        </tr>
        <tr>
          <td><code>char</code></td>
          <td><code>char grade = 'A';</code></td>
          <td>Single characters</td>
        </tr>
      </tbody>
    </table>

    <h3>Multiple Declarations</h3>
    <p>You can declare multiple variables of the same type in one line:</p>
    <pre><code>int a = 1, b = 2, c = 3;</code></pre>

    <h3>Example Program</h3>
    <pre><code>#include &lt;stdio.h&gt;

int main() {
  int age = 21;
  float weight = 60.5;
  char grade = 'A';

  printf("Age: %d\\n", age);
  printf("Weight: %.1f\\n", weight);
  printf("Grade: %c\\n", grade);

  return 0;
}</code></pre>

    <h3>Summary</h3>
    <ul>
      <li>Variables store data in memory for use in your program</li>
      <li>Must be declared with a valid type and optional initial value</li>
      <li>Follow naming rules to avoid errors</li>
    </ul>
  `,
            },
            datatypes: {
                title: "Data Types in C",
                html: `
    <h2>Data Types in C</h2>
    <p>In C, a data type defines the type of data a variable can hold. It determines the size and layout of the variable's memory, the range of values it can store, and the operations that can be performed on it.</p>

    <h3>1. Basic Data Types</h3>
    <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr style="background-color: #1a1a1a; color: cyan;">
          <th>Data Type</th>
          <th>Size</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>int</code></td>
          <td>4 bytes</td>
          <td>Stores integers</td>
          <td><code>int x = 10;</code></td>
        </tr>
        <tr>
          <td><code>float</code></td>
          <td>4 bytes</td>
          <td>Stores decimal numbers</td>
          <td><code>float pi = 3.14;</code></td>
        </tr>
        <tr>
          <td><code>double</code></td>
          <td>8 bytes</td>
          <td>Stores large/precise decimal numbers</td>
          <td><code>double g = 9.81;</code></td>
        </tr>
        <tr>
          <td><code>char</code></td>
          <td>1 byte</td>
          <td>Stores a single character</td>
          <td><code>char ch = 'A';</code></td>
        </tr>
      </tbody>
    </table>

    <h3>2. Derived Data Types</h3>
    <ul>
      <li><strong>Array:</strong> Collection of similar data types <br><code>int marks[5];</code></li>
      <li><strong>Pointer:</strong> Stores address of another variable <br><code>int *ptr;</code></li>
      <li><strong>Structure:</strong> Combines different types <br><code>struct student { int id; char name[20]; };</code></li>
      <li><strong>Union:</strong> Shares memory among members</li>
      <li><strong>Enumeration (enum):</strong> Named integer constants</li>
    </ul>

    <h3>3. Type Modifiers</h3>
    <p>These modifiers change the size and range of basic types:</p>
    <ul>
      <li><code>short</code> — e.g., <code>short int s;</code></li>
      <li><code>long</code> — e.g., <code>long int l;</code></li>
      <li><code>signed</code> and <code>unsigned</code> — e.g., <code>unsigned int u;</code></li>
    </ul>

    <h3>4. Rules for Declaring Variables</h3>
    <ul>
      <li>Variable name must begin with a letter (A–Z, a–z) or underscore (_)</li>
      <li>Variable name can contain letters, digits (0–9), and underscore</li>
      <li>Keywords like <code>int</code>, <code>float</code> cannot be used as variable names</li>
      <li>Declaration syntax: <code>datatype variableName = value;</code></li>
    </ul>

    <h3>5. Example</h3>
    <pre><code>#include &lt;stdio.h&gt;

int main() {
  int age = 25;
  float weight = 65.5;
  char grade = 'A';
  
  printf("Age: %d\\n", age);
  printf("Weight: %.2f\\n", weight);
  printf("Grade: %c\\n", grade);

  return 0;
}</code></pre>

    <h3>6. Summary</h3>
    <ul>
      <li><strong>Choose the right data type</strong> based on value type and size.</li>
      <li>Use <code>sizeof()</code> to find memory used by a variable.</li>
      <li>Declare variables before using them.</li>
    </ul>
  `,
            },
            operators: {
                title: "Operators in C",
                html: `
                <h2>Operators in C</h2>
                <p>Operators are special symbols used to perform operations on variables and values. C supports a wide range of operators for different purposes.</p>

                <h3>1. Arithmetic Operators</h3>
                <p>Used to perform basic mathematical operations:</p>
                <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
                <thead>
                    <tr style="background-color: #1a1a1a; color: cyan;">
                    <th>Operator</th>
                    <th>Description</th>
                    <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>+</td><td>Addition</td><td><code>a + b</code></td></tr>
                    <tr><td>-</td><td>Subtraction</td><td><code>a - b</code></td></tr>
                    <tr><td>*</td><td>Multiplication</td><td><code>a * b</code></td></tr>
                    <tr><td>/</td><td>Division</td><td><code>a / b</code></td></tr>
                    <tr><td>%</td><td>Modulus (remainder)</td><td><code>a % b</code></td></tr>
                </tbody>
                </table>

                <h3>2. Relational Operators</h3>
                <p>Used to compare two values and return true (1) or false (0).</p>
                <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
                <thead>
                    <tr style="background-color: #1a1a1a; color: cyan;">
                    <th>Operator</th>
                    <th>Description</th>
                    <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>==</td><td>Equal to</td><td><code>a == b</code></td></tr>
                    <tr><td>!=</td><td>Not equal to</td><td><code>a != b</code></td></tr>
                    <tr><td>&gt;</td><td>Greater than</td><td><code>a &gt; b</code></td></tr>
                    <tr><td>&lt;</td><td>Less than</td><td><code>a &lt; b</code></td></tr>
                    <tr><td>&gt;=</td><td>Greater than or equal to</td><td><code>a &gt;= b</code></td></tr>
                    <tr><td>&lt;=</td><td>Less than or equal to</td><td><code>a &lt;= b</code></td></tr>
                </tbody>
                </table>

                <h3>3. Logical Operators</h3>
                <p>Used to combine conditional statements:</p>
                <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
                <thead>
                    <tr style="background-color: #1a1a1a; color: cyan;">
                    <th>Operator</th>
                    <th>Description</th>
                    <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>&&</td><td>Logical AND</td><td><code>(a &gt; 0 && b &gt; 0)</code></td></tr>
                    <tr><td>||</td><td>Logical OR</td><td><code>(a &gt; 0 || b &gt; 0)</code></td></tr>
                    <tr><td>!</td><td>Logical NOT</td><td><code>!(a &gt; 0)</code></td></tr>
                </tbody>
                </table>

                <h3>4. Assignment Operators</h3>
                <p>Used to assign values to variables:</p>
                <ul>
                <li><code>=</code> : Assign <code>a = 10;</code></li>
                <li><code>+=</code> : Add and assign <code>a += 5;</code> (same as <code>a = a + 5;</code>)</li>
                <li><code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code> : Similar for other operations</li>
                </ul>

                <h3>5. Increment and Decrement Operators</h3>
                <ul>
                <li><code>++a</code> or <code>a++</code> — Increments <code>a</code> by 1</li>
                <li><code>--a</code> or <code>a--</code> — Decrements <code>a</code> by 1</li>
                </ul>

                <h3>6. Bitwise Operators</h3>
                <p>Used for bit-level operations (advanced):</p>
                <ul>
                <li><code>&</code>, <code>|</code>, <code>^</code>, <code>~</code>, <code>&lt;&lt;</code>, <code>&gt;&gt;</code></li>
                </ul>

                <h3>Example Program</h3>
                <pre><code>#include &lt;stdio.h&gt;

            int main() {
            int a = 10, b = 5;

            printf("a + b = %d\\n", a + b);
            printf("a == b = %d\\n", a == b);
            printf("a && b = %d\\n", a && b);

            return 0;
            }</code></pre>

                <h3>Summary Table</h3>
                <ul>
                <li><strong>Arithmetic:</strong> +, -, *, /, %</li>
                <li><strong>Relational:</strong> ==, !=, &gt;, &lt;, &gt;=, &lt;=</li>
                <li><strong>Logical:</strong> &&, ||, !</li>
                <li><strong>Assignment:</strong> =, +=, -=, *=, etc.</li>
                <li><strong>Bitwise:</strong> &, |, ^, ~, &lt;&lt;, &gt;&gt;</li>
                </ul>

                <p><em>Operators are essential tools for building logic and functionality in any C program.</em></p>
            `,

            },
            ifelse: {
                title: "If-Else Statements in C",
                html: `
            <h2>If-Else Statements in C</h2>
            <p>The <code>if</code> and <code>else</code> statements are used to perform conditional execution of code blocks based on a condition.</p>

            <h3>1. Basic Syntax of <code>if</code></h3>
            <pre><code>if (condition) {
        // code to execute if condition is true
        }</code></pre>

            <h3>Example:</h3>
            <pre><code>int x = 10;
        if (x > 5) {
        printf("x is greater than 5");
        }</code></pre>

            <h3>2. <code>if-else</code> Statement</h3>
            <p>Use <code>else</code> to run a block when the condition is false.</p>
            <pre><code>int x = 3;
        if (x > 5) {
        printf("x is greater than 5");
        } else {
        printf("x is 5 or less");
        }</code></pre>

            <h3>3. <code>if-else if-else</code> Ladder</h3>
            <p>Allows you to test multiple conditions.</p>
            <pre><code>int x = 0;
        if (x > 0) {
        printf("Positive");
        } else if (x < 0) {
        printf("Negative");
        } else {
        printf("Zero");
        }</code></pre>

            <h3>4. Nested <code>if</code> Statements</h3>
            <p>Place one <code>if</code> inside another:</p>
            <pre><code>int x = 20;
        if (x > 10) {
        if (x < 30) {
            printf("x is between 10 and 30");
        }
        }</code></pre>

            <h3>5. Tips:</h3>
            <ul>
            <li>Conditions must return a value of 0 (false) or non-zero (true).</li>
            <li>Curly braces <code>{ }</code> are optional for single-line blocks, but always recommended.</li>
            <li>Be careful with <code>=</code> (assignment) vs <code>==</code> (comparison).</li>
            </ul>

            <h3>6. Real-World Example</h3>
            <p>Check if a number is even or odd:</p>
            <pre><code>#include &lt;stdio.h&gt;

        int main() {
        int num = 7;
        if (num % 2 == 0) {
            printf("Even");
        } else {
            printf("Odd");
        }
        return 0;
        }</code></pre>

            <p><em>Use <code>if-else</code> to add logic and decision-making power to your programs.</em></p>
        `
            },
            loops: {
                title: "Loops in C",
                html: `
            <h2>Loops in C</h2>
            <p>Loops are used to execute a block of code multiple times until a specified condition is met. C supports three types of loops:</p>
            <ul>
            <li><strong>for loop</strong></li>
            <li><strong>while loop</strong></li>
            <li><strong>do...while loop</strong></li>
            </ul>

            <h3>1. for Loop</h3>
            <p>The <code>for</code> loop is used when the number of iterations is known in advance.</p>
            <pre><code>for (initialization; condition; increment) {
        // code to be executed
        }</code></pre>

            <h4>Example:</h4>
            <pre><code>for (int i = 1; i <= 5; i++) {
        printf("%d\\n", i);
        }</code></pre>

            <h3>2. while Loop</h3>
            <p>The <code>while</code> loop is used when the number of iterations is not known in advance. The condition is checked before each iteration.</p>
            <pre><code>while (condition) {
        // code to be executed
        }</code></pre>

            <h4>Example:</h4>
            <pre><code>int i = 1;
        while (i <= 5) {
        printf("%d\\n", i);
        i++;
        }</code></pre>

            <h3>3. do...while Loop</h3>
            <p>The <code>do...while</code> loop is similar to the <code>while</code> loop, but the condition is checked after the execution of the loop body. This ensures the loop runs at least once.</p>
            <pre><code>do {
        // code to be executed
        } while (condition);</code></pre>

            <h4>Example:</h4>
            <pre><code>int i = 1;
        do {
        printf("%d\\n", i);
        i++;
        } while (i <= 5);</code></pre>

            <h3>4. break and continue</h3>
            <ul>
            <li><code>break</code>: Terminates the loop immediately.</li>
            <li><code>continue</code>: Skips the current iteration and moves to the next.</li>
            </ul>

            <h4>Example with break:</h4>
            <pre><code>for (int i = 1; i <= 10; i++) {
        if (i == 6) break;
        printf("%d\\n", i);
        }</code></pre>

            <h4>Example with continue:</h4>
            <pre><code>for (int i = 1; i <= 5; i++) {
        if (i == 3) continue;
        printf("%d\\n", i);
        }</code></pre>

            <h3>5. Summary</h3>
            <ul>
            <li><strong>for</strong> – use when number of repetitions is known</li>
            <li><strong>while</strong> – use when the condition needs checking before loop</li>
            <li><strong>do...while</strong> – use when the loop should execute at least once</li>
            </ul>

            <p><em>Loops are essential for writing efficient, DRY (Don't Repeat Yourself) code in C.</em></p>
        `
            },
            switchcase: {
                title: "Switch Case in C",
                html: `
            <h2>Switch Case in C</h2>
            <p>The <code>switch</code> statement allows a variable to be tested for equality against multiple values (called <code>case</code>s). It's a cleaner alternative to writing many <code>if...else</code> statements.</p>

            <h3>Syntax:</h3>
            <pre><code>switch (expression) {
        case value1:
            // code block
            break;
        case value2:
            // code block
            break;
        ...
        default:
            // default code block
        }</code></pre>

            <h3>Key Components:</h3>
            <ul>
            <li><code>expression</code> should be an integer or character.</li>
            <li><code>case</code> is followed by a constant value.</li>
            <li><code>break</code> exits the switch block. Without it, execution will "fall through" to the next case.</li>
            <li><code>default</code> is optional. It runs if no case matches.</li>
            </ul>

            <h3>Example 1: Weekday Name</h3>
            <pre><code>#include &lt;stdio.h&gt;

        int main() {
        int day = 3;

        switch (day) {
            case 1:
            printf("Monday");
            break;
            case 2:
            printf("Tuesday");
            break;
            case 3:
            printf("Wednesday");
            break;
            case 4:
            printf("Thursday");
            break;
            case 5:
            printf("Friday");
            break;
            default:
            printf("Weekend");
        }

        return 0;
        }</code></pre>

            <h3>Example 2: Calculator</h3>
            <pre><code>#include &lt;stdio.h&gt;

        int main() {
        char operator = '+';
        int a = 5, b = 3;

        switch (operator) {
            case '+':
            printf("%d", a + b);
            break;
            case '-':
            printf("%d", a - b);
            break;
            case '*':
            printf("%d", a * b);
            break;
            case '/':
            printf("%d", a / b);
            break;
            default:
            printf("Invalid operator");
        }

        return 0;
        }</code></pre>

            <h3>Important Notes:</h3>
            <ul>
            <li><strong>Only integer and char types</strong> are allowed in switch expressions.</li>
            <li><strong>Break is important</strong> to avoid executing multiple cases unintentionally.</li>
            <li><strong>Default is optional</strong> but recommended for error handling or unmatched cases.</li>
            </ul>

            <h3>When to Use:</h3>
            <ul>
            <li>When checking a variable against many constant values</li>
            <li>To improve readability over long <code>if...else if</code> chains</li>
            </ul>

            <p><em>The switch case makes decision-making in C easier, cleaner, and more efficient.</em></p>
        `
            },
            functions: {
                title: "Functions in C",
                html: `
            <h2>Functions in C</h2>
            <p>A <strong>function</strong> is a block of code that performs a specific task. Functions help in modularizing code and make it reusable and easier to maintain.</p>

            <h3>Types of Functions:</h3>
            <ul>
            <li><strong>Library Functions</strong> – Built-in, like <code>printf()</code>, <code>scanf()</code>, etc.</li>
            <li><strong>User-defined Functions</strong> – Created by the programmer.</li>
            </ul>

            <h3>Advantages of Using Functions:</h3>
            <ul>
            <li>Code Reusability</li>
            <li>Modular Programming</li>
            <li>Improved Debugging and Maintenance</li>
            </ul>

            <h3>Function Syntax:</h3>
            <pre><code>return_type function_name(parameter1, parameter2, ...) {
        // code block
        }</code></pre>

            <h3>Function Declaration:</h3>
            <pre><code>return_type function_name(parameter list);</code></pre>

            <h3>Function Call:</h3>
            <pre><code>function_name(arguments);</code></pre>

            <h3>Example: Function to Add Two Numbers</h3>
            <pre><code>#include &lt;stdio.h&gt;

        // Function Declaration
        int add(int a, int b);

        int main() {
        int sum = add(5, 3);  // Function Call
        printf("Sum: %d", sum);
        return 0;
        }

        // Function Definition
        int add(int a, int b) {
        return a + b;
        }</code></pre>

            <h3>Function Components:</h3>
            <ul>
            <li><strong>Return Type</strong>: Data type the function returns (e.g., <code>int</code>, <code>void</code>).</li>
            <li><strong>Function Name</strong>: Valid identifier (e.g., <code>add</code>).</li>
            <li><strong>Parameters</strong>: Inputs to the function (optional).</li>
            <li><strong>Body</strong>: Code block that defines what the function does.</li>
            </ul>

            <h3>Void Function Example (No Return Value):</h3>
            <pre><code>void greet() {
        printf("Welcome to C programming!\\n");
        }</code></pre>

            <h3>Returning Multiple Values:</h3>
            <p>C does not return multiple values directly, but we can use pointers or structures for that.</p>

            <h3>Recursion Example (Function Calling Itself):</h3>
            <pre><code>int factorial(int n) {
        if (n == 0) return 1;
        else return n * factorial(n - 1);
        }</code></pre>

            <h3>Key Rules:</h3>
            <ul>
            <li>Declare the function before using it (unless it's defined above).</li>
            <li>Return type must match the returned data.</li>
            <li>Parameters must match in type and count during function call.</li>
            </ul>

            <p><em>Functions improve structure, reuse, and readability of code. Every good C program makes extensive use of them!</em></p>
        `
            },
            array: {
                title: "Arrays in C",
                html: `
            <h2>Arrays in C</h2>
            <p>An <strong>array</strong> is a collection of elements of the same data type stored in contiguous memory locations. Arrays make it easier to manage large sets of related data.</p>

            <h3>Why Use Arrays?</h3>
            <ul>
            <li>Store multiple values in a single variable</li>
            <li>Efficient memory usage</li>
            <li>Useful for loops and repetitive tasks</li>
            </ul>

            <h3>Types of Arrays:</h3>
            <ul>
            <li><strong>One-dimensional array</strong> – A list of elements</li>
            <li><strong>Two-dimensional array</strong> – Table or matrix-like data</li>
            <li><strong>Multidimensional arrays</strong> – 3D or more dimensions</li>
            </ul>

            <h3>Declaration Syntax:</h3>
            <pre><code>data_type array_name[size];</code></pre>
            <p><strong>Example:</strong></p>
            <pre><code>int marks[5];</code></pre>

            <h3>Initialization:</h3>
            <pre><code>int marks[5] = {90, 85, 78, 92, 88};</code></pre>
            <p>or initialize later:</p>
            <pre><code>marks[0] = 90;
        marks[1] = 85;
        // ...</code></pre>

            <h3>Accessing Array Elements:</h3>
            <pre><code>printf("%d", marks[2]); // Prints 78</code></pre>

            <h3>Traversing an Array:</h3>
            <pre><code>for(int i = 0; i < 5; i++) {
        printf("%d\\n", marks[i]);
        }</code></pre>

            <h3>Two-Dimensional Array:</h3>
            <pre><code>int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
        };</code></pre>

            <h3>Traversing 2D Arrays:</h3>
            <pre><code>for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
        }</code></pre>

            <h3>Memory Layout:</h3>
            <p>Elements are stored in contiguous blocks. For example:</p>
            <pre><code>int arr[3] = {10, 20, 30};</code></pre>
            <p>This takes space at address: 1000, 1004, 1008 (assuming int = 4 bytes)</p>

            <h3>Important Notes:</h3>
            <ul>
            <li>Array index starts from <strong>0</strong>.</li>
            <li>Accessing out-of-bound index results in <strong>undefined behavior</strong>.</li>
            <li>Array size must be known at compile time unless using dynamic memory.</li>
            </ul>

            <h3>Limitations of Arrays:</h3>
            <ul>
            <li>Fixed size once declared</li>
            <li>Cannot store different data types in one array</li>
            <li>Insertion and deletion operations are costly compared to linked lists</li>
            </ul>

            <p><em>Arrays are foundational in C and used in almost every real-world program — from storing user input to handling complex datasets.</em></p>
        `
            },
            pointers: {
                title: "Pointers in C",
                html: `
            <h2>Pointers in C</h2>
            <p>A <strong>pointer</strong> is a variable that stores the <em>memory address</em> of another variable. Pointers are one of the most powerful features of the C language.</p>

            <h3>Why Use Pointers?</h3>
            <ul>
            <li>Efficient array and string handling</li>
            <li>Dynamic memory allocation</li>
            <li>Function arguments can be passed by reference</li>
            <li>Data structures like linked lists, trees, graphs use pointers</li>
            </ul>

            <h3>Declaring a Pointer:</h3>
            <pre><code>data_type *pointer_name;</code></pre>
            <p><strong>Example:</strong></p>
            <pre><code>int *ptr;</code></pre>

            <h3>Storing Address:</h3>
            <pre><code>int a = 10;
        ptr = &a;  // & is the address-of operator</code></pre>

            <h3>Dereferencing a Pointer:</h3>
            <pre><code>printf("%d", *ptr);  // prints the value of 'a'</code></pre>

            <h3>Illustration:</h3>
            <pre><code>int a = 5;
        int *p = &a;

        printf("%p", &a);   // Address of a
        printf("%p", p);    // Address of a (same as &a)
        printf("%d", *p);   // Value of a (5)</code></pre>

            <h3>Pointer to Pointer:</h3>
            <pre><code>int a = 10;
        int *p = &a;
        int **pp = &p;

        printf("%d", **pp);  // prints 10</code></pre>

            <h3>Pointers and Arrays:</h3>
            <pre><code>int arr[3] = {1, 2, 3};
        int *p = arr;

        printf("%d", *(p + 1));  // prints 2
        </code></pre>

            <h3>Dynamic Memory Allocation:</h3>
            <pre><code>int ptr = (int)malloc(sizeof(int));
        *ptr = 25;
        free(ptr);</code></pre>

            <h3>Function with Pointer Argument:</h3>
            <pre><code>void update(int *x) {
        *x = *x + 10;
        }

        int main() {
        int a = 5;
        update(&a);
        printf("%d", a);  // prints 15
        }</code></pre>

            <h3>Common Pointer Errors:</h3>
            <ul>
            <li><strong>Uninitialized pointer:</strong> Using a pointer without assigning address can crash the program.</li>
            <li><strong>Dangling pointer:</strong> Accessing freed memory.</li>
            <li><strong>Memory leak:</strong> Not freeing dynamically allocated memory.</li>
            </ul>

            <h3>Key Pointer Operators:</h3>
            <ul>
            <li><code>*</code> – Dereference operator (access value at address)</li>
            <li><code>&</code> – Address-of operator (gets address of a variable)</li>
            </ul>

            <p><em>Pointers are crucial for low-level programming, memory management, and efficient algorithms. Mastering them is key to mastering C.</em></p>
        `
            },
            recursion: {
                title: "Recursion in C",
                html: `
            <h2>Recursion in C</h2>
            <p><strong>Recursion</strong> is a programming technique where a function calls itself directly or indirectly to solve a problem.</p>

            <h3>Why Use Recursion?</h3>
            <ul>
            <li>Breaks complex problems into simpler subproblems</li>
            <li>Useful in algorithms like factorial, Fibonacci, searching, sorting, etc.</li>
            <li>Makes code cleaner for tree/graph traversal</li>
            </ul>

            <h3>Basic Structure:</h3>
            <pre><code>void recurse() {
        // base condition
        // recursive call
        }</code></pre>

            <h3>Key Concept: Base Case</h3>
            <p>Every recursive function must have a <strong>base case</strong> to stop the recursion and prevent infinite calls.</p>

            <h3>Example 1: Factorial of a Number</h3>
            <pre><code>int factorial(int n) {
        if (n == 0)
            return 1;
        else
            return n * factorial(n - 1);
        }</code></pre>

            <h4>Calling:</h4>
            <pre><code>int result = factorial(5);  // returns 120</code></pre>

            <h3>Example 2: Fibonacci Series</h3>
            <pre><code>int fibonacci(int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;
        return fibonacci(n - 1) + fibonacci(n - 2);
        }</code></pre>

            <h3>Visualizing Recursion:</h3>
            <p>Each function call goes on the stack until the base condition is reached, then the stack unwinds.</p>

            <h3>Advantages:</h3>
            <ul>
            <li>Simplifies code for problems like tree traversal, backtracking</li>
            <li>Reduces complexity in some cases</li>
            </ul>

            <h3>Disadvantages:</h3>
            <ul>
            <li>Can lead to stack overflow if base case is missing</li>
            <li>Less efficient for problems with overlapping subproblems (e.g., naive Fibonacci)</li>
            <li>More memory usage due to call stack</li>
            </ul>

            <h3>Tips:</h3>
            <ul>
            <li>Always define a base condition</li>
            <li>Use recursion where iteration is less intuitive</li>
            <li>Tail recursion (where recursive call is last) can be optimized by compilers</li>
            </ul>

            <p><em>Recursion is a fundamental concept in C and many other languages. Mastering it opens doors to elegant and powerful solutions to complex problems.</em></p>
        `
            },

            structure: {
                title: "Structures in C",
                html: `
            <h2>Structures in C</h2>
            <p><strong>Structure</strong> (or <code>struct</code>) in C is a user-defined data type that groups related variables of different data types under one name.</p>

            <h3>Why Use Structures?</h3>
            <ul>
            <li>To represent real-world entities like students, employees, etc.</li>
            <li>To group related information into a single unit</li>
            <li>Makes large codebases more manageable and readable</li>
            </ul>

            <h3>Defining a Structure:</h3>
            <pre><code>struct Student {
        int id;
        char name[50];
        float marks;
        };</code></pre>

            <h3>Declaring Structure Variables:</h3>
            <pre><code>struct Student s1, s2;</code></pre>

            <h3>Accessing Structure Members:</h3>
            <pre><code>s1.id = 101;
        strcpy(s1.name, "John");
        s1.marks = 92.5;

        printf("ID: %d\\n", s1.id);
        printf("Name: %s\\n", s1.name);
        printf("Marks: %.2f\\n", s1.marks);</code></pre>

            <h3>Using <code>typedef</code> for Simplicity:</h3>
            <pre><code>typedef struct {
        int id;
        char name[50];
        } Employee;

        Employee e1;
        e1.id = 201;</code></pre>

            <h3>Array of Structures:</h3>
            <pre><code>struct Student students[3];

        for (int i = 0; i < 3; i++) {
        students[i].id = i + 1;
        strcpy(students[i].name, "Student");
        students[i].marks = 85.0;
        }</code></pre>

            <h3>Structures within Structures (Nested Structures):</h3>
            <pre><code>struct Date {
        int day, month, year;
        };

        struct Employee {
        int id;
        char name[50];
        struct Date joinDate;
        };</code></pre>

            <h3>Passing Structure to Function:</h3>
            <pre><code>void printStudent(struct Student s) {
        printf("ID: %d, Name: %s, Marks: %.2f", s.id, s.name, s.marks);
        }</code></pre>

            <h3>Advantages of Structures:</h3>
            <ul>
            <li>Groups related data together</li>
            <li>Used to create more complex data models</li>
            <li>Essential for linked lists, trees, and other data structures</li>
            </ul>

            <h3>Limitations:</h3>
            <ul>
            <li>No direct support for functions inside structures (unlike classes in C++)</li>
            <li>No access modifiers like public or private</li>
            </ul>

            <p><em>Structures are foundational in C programming and form the basis for advanced topics like file handling, data structures, and even OOP in C++.</em></p>
        `
            },
            dynamic_memory: {
                title: "Dynamic Memory Allocation in C",
                html: `
            <h2>Dynamic Memory Allocation in C</h2>
            <p>In C, memory can be allocated at runtime using dynamic memory allocation. This is useful when the size of data structures (like arrays or structs) cannot be determined at compile-time.</p>

            <h3>Why Use Dynamic Memory?</h3>
            <ul>
            <li>Efficient use of memory</li>
            <li>Allocate memory only when needed</li>
            <li>Helps with large and complex data structures (linked lists, trees, etc.)</li>
            </ul>

            <h3>Memory Allocation Functions (from <code>&lt;stdlib.h&gt;</code>):</h3>
            <table border="1" cellpadding="6">
            <thead>
                <tr>
                <th>Function</th>
                <th>Purpose</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td><code>malloc()</code></td>
                <td>Allocates a block of memory</td>
                </tr>
                <tr>
                <td><code>calloc()</code></td>
                <td>Allocates memory and initializes to 0</td>
                </tr>
                <tr>
                <td><code>realloc()</code></td>
                <td>Reallocates memory block to a new size</td>
                </tr>
                <tr>
                <td><code>free()</code></td>
                <td>Frees previously allocated memory</td>
                </tr>
            </tbody>
            </table>

            <h3>1. <code>malloc()</code> Example:</h3>
            <pre><code>#include &lt;stdlib.h&gt;
        int arr = (int) malloc(5 * sizeof(int));
        if (arr == NULL) {
        printf("Memory not allocated!");
        }</code></pre>

            <h3>2. <code>calloc()</code> Example:</h3>
            <pre><code>int arr = (int) calloc(5, sizeof(int)); // All values initialized to 0</code></pre>

            <h3>3. <code>realloc()</code> Example:</h3>
            <pre><code>arr = (int*) realloc(arr, 10 * sizeof(int)); // Resize the array</code></pre>

            <h3>4. <code>free()</code> Example:</h3>
            <pre><code>free(arr); // Always free dynamically allocated memory</code></pre>

            <h3>Important Notes:</h3>
            <ul>
            <li>Always check if memory allocation was successful (check for NULL).</li>
            <li><strong>Free every allocated memory</strong> using <code>free()</code> to prevent memory leaks.</li>
            <li>Dynamic memory is stored in the heap segment.</li>
            </ul>

            <h3>Visual Memory Segments in C:</h3>
            <ul>
            <li><strong>Code Segment</strong>: Program instructions</li>
            <li><strong>Stack</strong>: Function call variables</li>
            <li><strong>Heap</strong>: Dynamically allocated memory (malloc/calloc)</li>
            </ul>

            <h3>Use Case:</h3>
            <pre><code>// Read array size at runtime
        int n;
        printf("Enter number of elements: ");
        scanf("%d", &n);

        int arr = (int) malloc(n * sizeof(int));
        if (arr == NULL) {
        printf("Memory not allocated!");
        } else {
        for (int i = 0; i < n; i++) {
            arr[i] = i + 1;
        }

        for (int i = 0; i < n; i++) {
            printf("%d ", arr[i]);
        }

        free(arr);
        }</code></pre>

            <p><em>Dynamic memory management is essential for efficient and flexible C programs, especially for data structures like linked lists, trees, and graphs.</em></p>
        `
            },
            file_handling: {
                title: "File Handling in C",
                html: `
            <h2>File Handling in C</h2>
            <p>File handling in C allows you to store output or read input from files rather than using the terminal. This is useful for saving data permanently.</p>

            <h3>File Operations:</h3>
            <ul>
            <li><code>fopen()</code> – Open a file</li>
            <li><code>fprintf(), fscanf()</code> – Write/read formatted data</li>
            <li><code>fputc(), fgetc()</code> – Write/read characters</li>
            <li><code>fclose()</code> – Close the file</li>
            </ul>

            <h3>File Modes in <code>fopen()</code>:</h3>
            <ul>
            <li><code>"r"</code> – Open for reading (file must exist)</li>
            <li><code>"w"</code> – Create an empty file for writing</li>
            <li><code>"a"</code> – Append to file</li>
            <li><code>"r+"</code> – Read and write</li>
            </ul>

            <h3>Example: Write to a File</h3>
            <pre><code>#include &lt;stdio.h&gt;
        int main() {
        FILE *fptr = fopen("output.txt", "w");
        if (fptr == NULL) {
            printf("Error opening file!");
            return 1;
        }
        fprintf(fptr, "Hello, File!\n");
        fclose(fptr);
        return 0;
        }</code></pre>

            <h3>Example: Read from a File</h3>
            <pre><code>#include &lt;stdio.h&gt;
        int main() {
        char str[100];
        FILE *fptr = fopen("output.txt", "r");
        if (fptr == NULL) {
            printf("File not found!");
            return 1;
        }
        while (fgets(str, 100, fptr) != NULL)
            printf("%s", str);
        fclose(fptr);
        return 0;
        }</code></pre>

            <h3>Important Notes:</h3>
            <ul>
            <li>Always check if <code>fptr == NULL</code> after opening a file.</li>
            <li>Don't forget to <code>fclose()</code> after file operations to avoid memory leaks.</li>
            <li>Use relative or absolute paths correctly when working with files.</li>
            </ul>
        `
            },
            string_handling: {
                title: "String Handling in C",
                html: `
            <h2>String Handling in C</h2>
            <p>In C, a string is a 1D array of characters terminated by a null character <code>'\\0'</code>.</p>

            <h3>Declaring Strings</h3>
            <pre><code>char str1[] = "Hello";
        char str2[10] = "World";</code></pre>

            <h3>Common String Functions (from <code>&lt;string.h&gt;</code>):</h3>
            <ul>
            <li><code>strlen(str)</code> – Length of string</li>
            <li><code>strcpy(dest, src)</code> – Copy string</li>
            <li><code>strcat(dest, src)</code> – Concatenate strings</li>
            <li><code>strcmp(s1, s2)</code> – Compare strings</li>
            </ul>

            <h3>Example: Using String Functions</h3>
            <pre><code>#include &lt;stdio.h&gt;
        #include &lt;string.h&gt;

        int main() {
        char str1[20] = "Hello";
        char str2[] = "World";

        strcat(str1, str2);   // str1 becomes "HelloWorld"
        printf("Concatenated: %s\\n", str1);
        printf("Length: %lu\\n", strlen(str1));
        return 0;
        }</code></pre>

            <h3>Reading Strings</h3>
            <pre><code>char name[50];
        printf("Enter name: ");
        scanf("%s", name);</code></pre>

            <p>Note: <code>scanf()</code> with <code>%s</code> reads only one word. Use <code>fgets()</code> to read full lines:</p>
            <pre><code>fgets(name, sizeof(name), stdin);</code></pre>

            <h3>Important Notes:</h3>
            <ul>
            <li>Always use <code>\\0</code> to mark end of strings.</li>
            <li><code>string.h</code> must be included for using string functions.</li>
            <li>Ensure your destination array is large enough when using <code>strcpy</code> or <code>strcat</code>.</li>
            </ul>
        `
            },

        }

    },
  
    python: {
        name: "Python",
        topics: {
            introduction: {
                title: "Introduction to Python",
                html: `
    <h2>Introduction to Python</h2>
    <p>Python is a high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms and has a large standard library.</p>

    <h3>Features of Python:</h3>
    <ul>
      <li>Simple and easy-to-read syntax</li>
      <li>Interpreted and dynamically typed</li>
      <li>Extensive standard library and third-party packages</li>
      <li>Supports object-oriented, procedural, and functional programming</li>
    </ul>

    <h3>Hello World in Python</h3>
    <pre><code>print("Hello, World!")</code></pre>

    <h3>Python Variables</h3>
    <p>Variables are created when you assign a value to them. No need to declare types.</p>
    <pre><code>x = 10
name = "Alice"
pi = 3.14</code></pre>

    <h3>Data Types</h3>
    <ul>
      <li><code>int</code> – Integer</li>
      <li><code>float</code> – Floating point number</li>
      <li><code>str</code> – String</li>
      <li><code>bool</code> – Boolean (True/False)</li>
      <li><code>list</code>, <code>tuple</code>, <code>dict</code>, <code>set</code> – Collections</li>
    </ul>

    <h3>Comments in Python</h3>
    <pre><code># This is a single-line comment

"""
This is a
multi-line comment
"""</code></pre>

    <h3>Taking Input</h3>
    <pre><code>name = input("Enter your name: ")
print("Hello", name)</code></pre>

    <h3>Basic Output</h3>
    <pre><code>print("Sum =", 10 + 5)</code></pre>

    <h3>Indentation in Python</h3>
    <p>Indentation is mandatory in Python to define blocks of code.</p>
    <pre><code>if 5 > 2:
    print("5 is greater than 2")</code></pre>

    <h3>Note:</h3>
    <ul>
      <li>Python files have <code>.py</code> extension</li>
      <li>Use <code>python filename.py</code> to run scripts</li>
      <li>Python is case-sensitive</li>
    </ul>
  `
            },
            variables: {
                title: "Variables in Python",
                html: `
    <h2>Variables in Python</h2>
    <p>Variables are used to store data in memory. Python is dynamically typed, so you don’t need to declare the type of a variable explicitly.</p>

    <h3>Creating Variables</h3>
    <pre><code>x = 5
name = "Alice"
price = 99.99
is_valid = True</code></pre>

    <h3>Variable Naming Rules</h3>
    <ul>
      <li>Must start with a letter or underscore ( _ )</li>
      <li>Cannot start with a number</li>
      <li>Can contain letters, numbers, and underscores</li>
      <li>Case-sensitive (e.g., <code>age</code> and <code>Age</code> are different)</li>
    </ul>

    <h3>Dynamic Typing</h3>
    <p>You can change the type of a variable simply by assigning a different value.</p>
    <pre><code>x = 10       # int
x = "ten"   # now a str</code></pre>

    <h3>Type Checking</h3>
    <pre><code>print(type(x))</code></pre>

    <h3>Multiple Assignment</h3>
    <pre><code>a, b, c = 1, 2, 3
name, age = "Bob", 25</code></pre>

    <h3>Swapping Variables</h3>
    <pre><code>a, b = b, a</code></pre>

    <h3>Constants (by convention)</h3>
    <p>Python doesn’t have true constants, but variables written in all caps are treated as constants by convention.</p>
    <pre><code>PI = 3.14159</code></pre>

    <h3>Note:</h3>
    <ul>
      <li>Use descriptive names for clarity.</li>
      <li>No need to declare variables or their types explicitly.</li>
      <li>Use <code>del varname</code> to delete a variable.</li>
    </ul>
  `
            },
            data_types: {
                title: "Data Types in Python",
                html: `
    <h2>Data Types in Python</h2>
    <p>Python supports various built-in data types. You can check the type of a variable using the <code>type()</code> function.</p>

    <h3>Basic Data Types</h3>
    <ul>
      <li><strong>int</strong>: Integer numbers (e.g., <code>10</code>, <code>-5</code>)</li>
      <li><strong>float</strong>: Decimal numbers (e.g., <code>3.14</code>, <code>-0.99</code>)</li>
      <li><strong>str</strong>: String of characters (e.g., <code>"hello"</code>)</li>
      <li><strong>bool</strong>: Boolean values (<code>True</code> or <code>False</code>)</li>
    </ul>

    <h3>Examples</h3>
    <pre><code>x = 10           # int
pi = 3.14159     # float
name = "Alice"   # str
is_valid = True  # bool</code></pre>

    <h3>Type Checking</h3>
    <pre><code>print(type(x))   # &lt;class 'int'&gt;</code></pre>

    <h3>Type Conversion (Casting)</h3>
    <ul>
      <li><code>int()</code> – Convert to integer</li>
      <li><code>float()</code> – Convert to float</li>
      <li><code>str()</code> – Convert to string</li>
      <li><code>bool()</code> – Convert to boolean</li>
    </ul>

    <pre><code>age = "25"
age_num = int(age)
print(age_num + 5)  # 30</code></pre>

    <h3>None Type</h3>
    <p><code>None</code> is a special type representing the absence of a value.</p>
    <pre><code>x = None
print(type(x))   # &lt;class 'NoneType'&gt;</code></pre>

    <h3>Note:</h3>
    <ul>
      <li>Python is dynamically typed – the variable type is decided at runtime.</li>
      <li>Use <code>is</code> to compare with <code>None</code>.</li>
    </ul>
  `
            },
            input_output: {
                title: "Input and Output in Python",
                html: `
    <h2>Input and Output in Python</h2>
    <p>Python provides simple functions to take input from users and display output on the screen.</p>

    <h3>Taking Input</h3>
    <p>Use the <code>input()</code> function to get input from the user. It always returns a string.</p>
    <pre><code>name = input("Enter your name: ")
print("Hello,", name)</code></pre>

    <h4>Type Conversion</h4>
    <p>Convert the input to other types if needed:</p>
    <pre><code>age = int(input("Enter your age: "))
pi = float(input("Enter PI value: "))</code></pre>

    <h3>Displaying Output</h3>
    <p>Use <code>print()</code> to display output.</p>
    <pre><code>print("Welcome to Python!")
print("Name:", name)
print("Age:", age)</code></pre>

    <h4>Using f-strings (Python 3.6+)</h4>
    <pre><code>print(f"Hello, {name}. You are {age} years old.")</code></pre>

    <h3>Custom Separator and End</h3>
    <pre><code>print("A", "B", "C", sep="-")   # A-B-C
print("Hello", end="!!!")      # No new line at end</code></pre>

    <h3>Multiline Output</h3>
    <pre><code>print("""This is
a multiline
string.""")</code></pre>

    <h3>Note:</h3>
    <ul>
      <li><code>input()</code> always returns <code>str</code> — cast to <code>int</code> or <code>float</code> if needed.</li>
      <li><code>print()</code> can print multiple values, strings, and even variables.</li>
      <li>Use <code>\\n</code> to insert a line break and <code>\\t</code> for a tab space.</li>
    </ul>
  `
            },
            operators: {
                title: "Operators in Python",
                html: `
    <h2>Operators in Python</h2>
    <p>Operators are special symbols used to perform operations on variables and values.</p>

    <h3>1. Arithmetic Operators</h3>
    <ul>
      <li><code>+</code> Addition</li>
      <li><code>-</code> Subtraction</li>
      <li><code>*</code> Multiplication</li>
      <li><code>/</code> Division (float)</li>
      <li><code>//</code> Floor Division</li>
      <li><code>%</code> Modulus (remainder)</li>
      <li><code>**</code> Exponentiation (power)</li>
    </ul>
    <pre><code>x = 5
y = 2
print(x + y)   # 7
print(x ** y)  # 25</code></pre>

    <h3>2. Comparison (Relational) Operators</h3>
    <ul>
      <li><code>==</code> Equal to</li>
      <li><code>!=</code> Not equal to</li>
      <li><code>&gt;</code> Greater than</li>
      <li><code>&lt;</code> Less than</li>
      <li><code>&gt;=</code> Greater than or equal to</li>
      <li><code>&lt;=</code> Less than or equal to</li>
    </ul>
    <pre><code>print(x == y)  # False</code></pre>

    <h3>3. Logical Operators</h3>
    <ul>
      <li><code>and</code> True if both are true</li>
      <li><code>or</code> True if at least one is true</li>
      <li><code>not</code> Inverts the result</li>
    </ul>
    <pre><code>a = True
b = False
print(a and b)  # False
print(not a)    # False</code></pre>

    <h3>4. Assignment Operators</h3>
    <p>Used to assign values to variables:</p>
    <ul>
      <li><code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>//=</code>, <code>%=</code>, <code>**=</code></li>
    </ul>
    <pre><code>x = 10
x += 5  # x becomes 15</code></pre>

    <h3>5. Identity & Membership Operators</h3>
    <ul>
      <li><code>is</code>, <code>is not</code> – Compare object identity</li>
      <li><code>in</code>, <code>not in</code> – Check if value is in a sequence</li>
    </ul>
    <pre><code>list1 = [1, 2, 3]
print(2 in list1)  # True
print(x is y)      # False</code></pre>

    <h3>Note:</h3>
    <ul>
      <li>Python supports operator overloading (e.g., <code>+</code> works for numbers and strings).</li>
      <li>Always use parentheses for complex expressions to avoid confusion.</li>
    </ul>
  `
            },
            conditional_statements: {
                title: "Conditional Statements in Python",
                html: `
    <h2>Conditional Statements in Python</h2>
    <p>Conditional statements let you control the flow of your program based on conditions.</p>

    <h3>if Statement</h3>
    <pre><code>x = 10
if x > 0:
    print("Positive number")</code></pre>

    <h3>if-else Statement</h3>
    <pre><code>x = -5
if x >= 0:
    print("Non-negative")
else:
    print("Negative")</code></pre>

    <h3>if-elif-else Ladder</h3>
    <pre><code>num = 0
if num > 0:
    print("Positive")
elif num == 0:
    print("Zero")
else:
    print("Negative")</code></pre>

    <h3>Nested if Statements</h3>
    <pre><code>age = 20
if age >= 18:
    if age >= 21:
        print("You can drink and vote")
    else:
        print("You can vote, but not drink")</code></pre>

    <h3>Short-Hand if and if-else</h3>
    <pre><code># One-line if
x = 10
if x > 5: print("x is greater than 5")

# One-line if-else
print("Even") if x % 2 == 0 else print("Odd")</code></pre>

    <h3>Logical Conditions</h3>
    <p>You can combine conditions using <code>and</code>, <code>or</code>, and <code>not</code>.</p>
    <pre><code>age = 25
if age > 18 and age < 60:
    print("Adult")</code></pre>

    <h3>Indentation Matters</h3>
    <p>Python uses indentation (usually 4 spaces) to define blocks of code.</p>

    <h3>Note:</h3>
    <ul>
      <li>Always use colons (<code>:</code>) after <code>if</code>, <code>elif</code>, and <code>else</code> statements.</li>
      <li>Indent all code blocks consistently — indentation is not optional in Python.</li>
    </ul>
  `
            },
            loops: {
                title: "Loops in Python",
                html: `
    <h2>Loops in Python</h2>
    <p>Loops are used to execute a block of code repeatedly.</p>

    <h3>1. while Loop</h3>
    <p>Executes a block of code as long as a condition is true.</p>
    <pre><code>i = 1
while i <= 5:
    print(i)
    i += 1</code></pre>

    <h3>2. for Loop</h3>
    <p>Used to iterate over a sequence (like list, tuple, string, etc.).</p>
    <pre><code>for i in range(5):
    print(i)</code></pre>

    <h3>Using range()</h3>
    <pre><code>range(5)        # 0 to 4
range(1, 6)     # 1 to 5
range(1, 10, 2) # 1 to 9 with step 2</code></pre>

    <h3>3. Looping through Strings</h3>
    <pre><code>for char in "Python":
    print(char)</code></pre>

    <h3>4. Looping through Lists</h3>
    <pre><code>fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)</code></pre>

    <h3>5. break Statement</h3>
    <p>Terminates the loop early.</p>
    <pre><code>for i in range(10):
    if i == 5:
        break
    print(i)</code></pre>

    <h3>6. continue Statement</h3>
    <p>Skips the current iteration.</p>
    <pre><code>for i in range(5):
    if i == 2:
        continue
    print(i)</code></pre>

    <h3>7. else with Loops</h3>
    <p><code>else</code> block runs if loop is not terminated by <code>break</code>.</p>
    <pre><code>for i in range(3):
    print(i)
else:
    print("Done")</code></pre>

    <h3>Note:</h3>
    <ul>
      <li>Python does not have traditional C-style <code>for(initialization; condition; increment)</code>.</li>
      <li>Use <code>range()</code> for numeric iteration.</li>
    </ul>
  `
            },
            functions: {
                title: "Functions in Python",
                html: `
    <h2>Functions in Python</h2>
    <p>Functions are blocks of code that perform a specific task and can be reused.</p>

    <h3>1. Defining a Function</h3>
    <pre><code>def greet():
    print("Hello, world!")</code></pre>

    <h3>2. Calling a Function</h3>
    <pre><code>greet()</code></pre>

    <h3>3. Function with Parameters</h3>
    <pre><code>def greet(name):
    print("Hello, " + name)

greet("Alice")</code></pre>

    <h3>4. Default Parameters</h3>
    <pre><code>def greet(name="Guest"):
    print("Hello, " + name)

greet()        # Hello, Guest
greet("Bob")   # Hello, Bob</code></pre>

    <h3>5. Return Statement</h3>
    <pre><code>def add(a, b):
    return a + b

result = add(3, 5)
print(result)</code></pre>

    <h3>6. Keyword Arguments</h3>
    <pre><code>def student(name, age):
    print(name, age)

student(age=20, name="John")</code></pre>

    <h3>7. Arbitrary Arguments</h3>
    <p>Use <code>*args</code> to pass multiple non-keyword arguments:</p>
    <pre><code>def total(*numbers):
    print(sum(numbers))

total(1, 2, 3)</code></pre>

    <p>Use <code>**kwargs</code> for multiple keyword arguments:</p>
    <pre><code>def show_details(**info):
    for key, value in info.items():
        print(key, ":", value)

show_details(name="Alice", age=25)</code></pre>

    <h3>8. Lambda Functions</h3>
    <pre><code>add = lambda x, y: x + y
print(add(3, 4))</code></pre>

    <h3>Note:</h3>
    <ul>
      <li>Function names should be descriptive and use lowercase with underscores.</li>
      <li>You must define a function before calling it.</li>
    </ul>
  `
            },
            lists_and_tuples: {
                title: "Lists and Tuples in Python",
                html: `
    <h2>Lists and Tuples in Python</h2>
    <p>Both lists and tuples are used to store multiple items in a single variable.</p>

    <h3>1. Lists</h3>
    <p>Lists are mutable (changeable), ordered, and allow duplicate elements.</p>
    <pre><code>fruits = ["apple", "banana", "cherry"]
print(fruits[0])        # apple
fruits[1] = "mango"     # Modify item
print(fruits)</code></pre>

    <h4>Common List Methods</h4>
    <ul>
      <li><code>append(item)</code> – Adds item to end</li>
      <li><code>insert(index, item)</code> – Inserts at index</li>
      <li><code>remove(item)</code> – Removes first occurrence</li>
      <li><code>pop(index)</code> – Removes item at index</li>
      <li><code>sort()</code> – Sorts list</li>
      <li><code>reverse()</code> – Reverses list</li>
    </ul>

    <pre><code>numbers = [3, 1, 4, 2]
numbers.sort()
print(numbers)  # [1, 2, 3, 4]</code></pre>

    <h3>2. Tuples</h3>
    <p>Tuples are immutable (cannot be changed), ordered, and allow duplicates.</p>
    <pre><code>coordinates = (10, 20)
print(coordinates[0])</code></pre>

    <p>Tuples with one item must include a comma:</p>
    <pre><code>single = (5,)   # Not just (5)</code></pre>

    <h4>Tuple Operations</h4>
    <ul>
      <li><code>count()</code> – Returns number of occurrences</li>
      <li><code>index()</code> – Returns first index of value</li>
    </ul>

    <h3>3. Conversion between List and Tuple</h3>
    <pre><code>list1 = list((1, 2, 3))   # Tuple to List
tuple1 = tuple([4, 5, 6]) # List to Tuple</code></pre>

    <h3>4. Looping through Lists and Tuples</h3>
    <pre><code>for fruit in fruits:
    print(fruit)

for x in coordinates:
    print(x)</code></pre>

    <h3>Note:</h3>
    <ul>
      <li>Use lists when you need to modify the data.</li>
      <li>Use tuples when data should not be changed.</li>
    </ul>
  `
            },
            dictionaries: {
                title: "Dictionaries in Python",
                html: `
    <h2>Dictionaries in Python</h2>
    <p>Dictionaries store data in key-value pairs. They are unordered (as of Python &lt; 3.7), mutable, and indexed by keys.</p>

    <h3>1. Creating a Dictionary</h3>
    <pre><code>person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}</code></pre>

    <h3>2. Accessing Values</h3>
    <pre><code>print(person["name"])       # Alice
print(person.get("age"))    # 25</code></pre>

    <h3>3. Adding and Updating</h3>
    <pre><code>person["email"] = "alice@example.com"
person["age"] = 26</code></pre>

    <h3>4. Removing Items</h3>
    <pre><code>person.pop("city")          # Removes city
del person["email"]         # Deletes email</code></pre>

    <h3>5. Looping Through a Dictionary</h3>
    <pre><code>for key in person:
    print(key, ":", person[key])

for key, value in person.items():
    print(key, "=>", value)</code></pre>

    <h3>6. Dictionary Methods</h3>
    <ul>
      <li><code>keys()</code> – Returns all keys</li>
      <li><code>values()</code> – Returns all values</li>
      <li><code>items()</code> – Returns key-value pairs</li>
      <li><code>update()</code> – Adds/updates multiple items</li>
      <li><code>clear()</code> – Empties the dictionary</li>
    </ul>

    <h3>7. Nested Dictionaries</h3>
    <pre><code>students = {
    "s1": {"name": "Alice", "grade": 90},
    "s2": {"name": "Bob", "grade": 85}
}

print(students["s1"]["name"])</code></pre>

    <h3>8. Using " in " to Check Keys</h3>
    <pre><code>if "age" in person:
    print("Age exists!")</code></pre>

    <h3>Note:</h3>
    <ul>
      <li>Dictionaries are ideal for structured data.</li>
      <li>Keys must be unique and immutable (e.g., strings, numbers, tuples).</li>
    </ul>
  `
            },


        },
    },
    java: {
    name: "Java",
    topics: {
      introduction: {
        title: "Introduction to Java",
        html: `
            <h2>Introduction to Java</h2>
            <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It was developed by Sun Microsystems (now owned by Oracle) in 1995 and is widely used for building platform-independent applications.</p>

            <h3>Key Features of Java</h3>
            <ul>
            <li><strong>Object-Oriented:</strong> Everything in Java is associated with objects and classes.</li>
            <li><strong>Platform Independent:</strong> Java programs are compiled into bytecode which can be run on any machine using the Java Virtual Machine (JVM).</li>
            <li><strong>Secure:</strong> Java provides a secure runtime environment through its security features.</li>
            <li><strong>Robust:</strong> Java handles exceptions and has strong memory management to avoid crashes.</li>
            <li><strong>Multithreaded:</strong> Java supports multithreading, allowing programs to do multiple tasks simultaneously.</li>
            <li><strong>Rich API:</strong> Java comes with a large set of built-in libraries for tasks like networking, data structures, GUI, and more.</li>
            </ul>

            <h3>Java Program Structure</h3>
            <p>Every Java application starts from the <code>main()</code> method.</p>
            <pre><code>public class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, World!");
        }
        }</code></pre>

            <h3>Compilation and Execution</h3>
            <ul>
            <li>Java source files use the <code>.java</code> extension.</li>
            <li>They are compiled using <code>javac</code> into bytecode files (<code>.class</code>).</li>
            <li>The bytecode is then run on the JVM using the <code>java</code> command.</li>
            </ul>

            <pre><code>// Compile
        javac HelloWorld.java

        // Run
        java HelloWorld</code></pre>

            <h3>Java Editions</h3>
            <ul>
            <li><strong>Java SE (Standard Edition):</strong> Core functionality, used in desktop applications.</li>
            <li><strong>Java EE (Enterprise Edition):</strong> Tools for enterprise apps like web services, servlets, etc.</li>
            <li><strong>Java ME (Micro Edition):</strong> Used in embedded and mobile systems.</li>
            </ul>

            <h3>Applications of Java</h3>
            <ul>
            <li>Web Development (Spring, JSP, Servlets)</li>
            <li>Mobile Development (Android apps)</li>
            <li>Desktop GUI Applications (JavaFX, Swing)</li>
            <li>Enterprise Applications</li>
            <li>Scientific Computing</li>
            </ul>

            <blockquote>
            <strong>“Write once, run anywhere”</strong> — Java programs can run on any system that supports JVM.
            </blockquote>
        `
        },
        variables: {
            title: "Variables and Data Types in Java",
            html: `
                <h2>Variables and Data Types in Java</h2>
                <p>Variables are used to store data in a program. Each variable must be declared with a data type, which tells Java what kind of value the variable can hold.</p>

                <h3>Declaration Syntax</h3>
                <pre><code>dataType variableName = value;</code></pre>
                <p><strong>Example:</strong></p>
                <pre><code>int age = 25;
            double price = 199.99;
            char grade = 'A';
            String name = "Alice";</code></pre>

                <h3>Types of Variables</h3>
                <ul>
                <li><strong>Local Variables:</strong> Declared inside a method and accessible only within it.</li>
                <li><strong>Instance Variables:</strong> Declared in a class but outside methods. They belong to objects.</li>
                <li><strong>Static Variables:</strong> Declared with the <code>static</code> keyword. Belong to the class, not objects.</li>
                </ul>

                <h3>Data Types in Java</h3>

                <h4>1. Primitive Data Types</h4>
                <table border="1" cellpadding="6" cellspacing="0">
                <thead>
                    <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Size</th>
                    <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><code>int</code></td>
                    <td>Integer values</td>
                    <td>4 bytes</td>
                    <td><code>int count = 10;</code></td>
                    </tr>
                    <tr>
                    <td><code>float</code></td>
                    <td>Decimal values</td>
                    <td>4 bytes</td>
                    <td><code>float price = 99.99f;</code></td>
                    </tr>
                    <tr>
                    <td><code>double</code></td>
                    <td>More precise decimal values</td>
                    <td>8 bytes</td>
                    <td><code>double pi = 3.14159;</code></td>
                    </tr>
                    <tr>
                    <td><code>char</code></td>
                    <td>Single character</td>
                    <td>2 bytes</td>
                    <td><code>char letter = 'A';</code></td>
                    </tr>
                    <tr>
                    <td><code>boolean</code></td>
                    <td>True or false</td>
                    <td>1 bit</td>
                    <td><code>boolean isJavaFun = true;</code></td>
                    </tr>
                    <tr>
                    <td><code>byte</code></td>
                    <td>Small integers (-128 to 127)</td>
                    <td>1 byte</td>
                    <td><code>byte age = 30;</code></td>
                    </tr>
                    <tr>
                    <td><code>short</code></td>
                    <td>Short integer</td>
                    <td>2 bytes</td>
                    <td><code>short year = 2025;</code></td>
                    </tr>
                    <tr>
                    <td><code>long</code></td>
                    <td>Large integers</td>
                    <td>8 bytes</td>
                    <td><code>long views = 1000000000L;</code></td>
                    </tr>
                </tbody>
                </table>

                <h4>2. Non-Primitive (Reference) Data Types</h4>
                <ul>
                <li><code>String</code>: A sequence of characters</li>
                <li><code>Arrays</code>: A collection of variables of the same type</li>
                <li><code>Objects</code>: Instances of classes</li>
                </ul>
                <pre><code>String message = "Hello, Java!";
            int[] numbers = {1, 2, 3, 4};</code></pre>

                <h3>Type Casting</h3>
                <p>You can convert between types using casting:</p>
                <pre><code>int x = (int) 10.5; // Explicit casting
            double y = 20;      // Implicit casting</code></pre>

                <blockquote><strong>Note:</strong> Always initialize variables before use in Java.</blockquote>
            `
        },
        operators: {
            title: "Operators in Java",
            html: `
                <h2>Java Operators</h2>
                <p>Operators in Java are special symbols that perform operations on variables and values. Java provides many types of operators to perform different kinds of tasks.</p>

                <h3>1. Arithmetic Operators</h3>
                <p>Used to perform basic mathematical operations:</p>
                <table border="1" cellpadding="6" cellspacing="0">
                <thead>
                    <tr><th>Operator</th><th>Description</th><th>Example</th></tr>
                </thead>
                <tbody>
                    <tr><td><code>+</code></td><td>Addition</td><td><code>a + b</code></td></tr>
                    <tr><td><code>-</code></td><td>Subtraction</td><td><code>a - b</code></td></tr>
                    <tr><td><code>*</code></td><td>Multiplication</td><td><code>a * b</code></td></tr>
                    <tr><td><code>/</code></td><td>Division</td><td><code>a / b</code></td></tr>
                    <tr><td><code>%</code></td><td>Modulus (remainder)</td><td><code>a % b</code></td></tr>
                </tbody>
                </table>

                <h3>2. Relational (Comparison) Operators</h3>
                <p>Used to compare two values and return a boolean result:</p>
                <table border="1" cellpadding="6" cellspacing="0">
                <thead>
                    <tr><th>Operator</th><th>Description</th><th>Example</th></tr>
                </thead>
                <tbody>
                    <tr><td><code>==</code></td><td>Equal to</td><td><code>a == b</code></td></tr>
                    <tr><td><code>!=</code></td><td>Not equal to</td><td><code>a != b</code></td></tr>
                    <tr><td><code>&gt;</code></td><td>Greater than</td><td><code>a &gt; b</code></td></tr>
                    <tr><td><code>&lt;</code></td><td>Less than</td><td><code>a &lt; b</code></td></tr>
                    <tr><td><code>&gt;=</code></td><td>Greater than or equal to</td><td><code>a &gt;= b</code></td></tr>
                    <tr><td><code>&lt;=</code></td><td>Less than or equal to</td><td><code>a &lt;= b</code></td></tr>
                </tbody>
                </table>

                <h3>3. Logical Operators</h3>
                <p>Used to combine multiple boolean expressions:</p>
                <table border="1" cellpadding="6" cellspacing="0">
                <thead>
                    <tr><th>Operator</th><th>Description</th><th>Example</th></tr>
                </thead>
                <tbody>
                    <tr><td><code>&&</code></td><td>Logical AND</td><td><code>a &gt; 10 && b &lt; 5</code></td></tr>
                    <tr><td><code>||</code></td><td>Logical OR</td><td><code>a &gt; 10 || b &lt; 5</code></td></tr>
                    <tr><td><code>!</code></td><td>Logical NOT</td><td><code>!(a &gt; 10)</code></td></tr>
                </tbody>
                </table>

                <h3>4. Assignment Operators</h3>
                <p>Used to assign values to variables:</p>
                <table border="1" cellpadding="6" cellspacing="0">
                <thead>
                    <tr><th>Operator</th><th>Description</th><th>Example</th></tr>
                </thead>
                <tbody>
                    <tr><td><code>=</code></td><td>Assign</td><td><code>a = 10;</code></td></tr>
                    <tr><td><code>+=</code></td><td>Add and assign</td><td><code>a += 5;</code></td></tr>
                    <tr><td><code>-=</code></td><td>Subtract and assign</td><td><code>a -= 2;</code></td></tr>
                    <tr><td><code>*=</code></td><td>Multiply and assign</td><td><code>a *= 3;</code></td></tr>
                    <tr><td><code>/=</code></td><td>Divide and assign</td><td><code>a /= 2;</code></td></tr>
                </tbody>
                </table>

                <h3>5. Unary Operators</h3>
                <p>Operate on a single operand:</p>
                <ul>
                <li><code>+</code>: Unary plus</li>
                <li><code>-</code>: Unary minus</li>
                <li><code>++</code>: Increment</li>
                <li><code>--</code>: Decrement</li>
                <li><code>!</code>: Logical NOT</li>
                </ul>

                <h3>6. Bitwise Operators</h3>
                <p>Used for bit-level operations:</p>
                <ul>
                <li><code>&</code>: Bitwise AND</li>
                <li><code>|</code>: Bitwise OR</li>
                <li><code>^</code>: Bitwise XOR</li>
                <li><code>~</code>: Bitwise Complement</li>
                <li><code>&lt;&lt;</code>: Left shift</li>
                <li><code>&gt;&gt;</code>: Right shift</li>
                </ul>

                <h3>7. Ternary Operator</h3>
                <p>Shortcut for <code>if-else</code>:</p>
                <pre><code>int max = (a > b) ? a : b;</code></pre>

                <blockquote><strong>Tip:</strong> Mastering operators helps you write concise and efficient Java code.</blockquote>
            `
        },
        ifelse: {
            title: "If-Else Statements in Java",
            html: `
                <h2>If-Else Statements in Java</h2>
                <p>The <strong>if-else</strong> statement allows conditional execution of code blocks based on whether a condition is <code>true</code> or <code>false</code>.</p>

                <h3>1. Basic if Statement</h3>
                <p>This executes a block of code only if the condition is true.</p>
                <pre><code>int number = 10;
            if (number > 0) {
            System.out.println("The number is positive.");
            }</code></pre>

                <h3>2. if-else Statement</h3>
                <p>If the condition is false, the <code>else</code> block runs.</p>
                <pre><code>int number = -5;
            if (number > 0) {
            System.out.println("Positive");
            } else {
            System.out.println("Negative");
            }</code></pre>

                <h3>3. if-else if Ladder</h3>
                <p>Used to check multiple conditions sequentially.</p>
                <pre><code>int score = 75;
            if (score >= 90) {
            System.out.println("Grade: A");
            } else if (score >= 75) {
            System.out.println("Grade: B");
            } else if (score >= 60) {
            System.out.println("Grade: C");
            } else {
            System.out.println("Grade: F");
            }</code></pre>

                <h3>4. Nested if Statements</h3>
                <p>You can place one <code>if</code> statement inside another.</p>
                <pre><code>int age = 25;
            boolean hasLicense = true;

            if (age >= 18) {
            if (hasLicense) {
                System.out.println("You can drive.");
            } else {
                System.out.println("You need a license.");
            }
            } else {
            System.out.println("You're too young to drive.");
            }</code></pre>

                <h3>5. Ternary Operator (Short if-else)</h3>
                <p>A compact form of <code>if-else</code> for simple expressions:</p>
                <pre><code>int a = 5, b = 10;
            int max = (a > b) ? a : b;
            System.out.println("Max is: " + max);</code></pre>

                <h3>Best Practices</h3>
                <ul>
                <li>Always use braces <code>{}</code> for better readability—even for single-line blocks.</li>
                <li>Avoid deeply nested <code>if</code> statements; consider using logical operators instead.</li>
                <li>Use <code>switch</code> when checking multiple exact values of a variable.</li>
                </ul>

                <blockquote><strong>Note:</strong> Always validate user input and handle edge cases inside <code>if</code> blocks.</blockquote>
            `
        },
        switchcase: {
            title: "Switch Case in Java",
            html: `
                <h2>Switch Case in Java</h2>
                <p>The <code>switch</code> statement is used when you have multiple conditions to check based on the value of a single variable. It is an alternative to using many <code>if-else-if</code> statements.</p>

                <h3>Syntax:</h3>
                <pre><code>switch (expression) {
            case value1:
                // statements
                break;
            case value2:
                // statements
                break;
            ...
            default:
                // default statements
            }</code></pre>

                <h3>Example: Day of the Week</h3>
                <pre><code>int day = 3;
            switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
                System.out.println("Saturday");
                break;
            case 7:
                System.out.println("Sunday");
                break;
            default:
                System.out.println("Invalid day");
            }</code></pre>

                <h3>Important Points</h3>
                <ul>
                <li><strong>Break Statement:</strong> Prevents fall-through to the next case.</li>
                <li><strong>Default Case:</strong> Executes when no match is found.</li>
                <li><strong>Only constants or final variables</strong> can be used as case labels.</li>
                </ul>

                <h3>Switch with String (Java 7+)</h3>
                <pre><code>String language = "Java";
            switch (language) {
            case "Java":
                System.out.println("You chose Java!");
                break;
            case "Python":
                System.out.println("You chose Python!");
                break;
            default:
                System.out.println("Unknown Language");
            }</code></pre>

                <h3>When to Use switch</h3>
                <ul>
                <li>When checking multiple possible exact matches of one variable.</li>
                <li>When using menu-based or command-based logic.</li>
                </ul>

                <blockquote><strong>Tip:</strong> Avoid using switch with complex expressions or ranges—use <code>if-else</code> instead.</blockquote>
            `
        },
        loops: {
            title: "Loops in Java",
            html: `
                <h2>Loops in Java</h2>
                <p>Loops are used to execute a block of code repeatedly until a specified condition is met. Java supports several types of loops to handle different use cases.</p>

                <h3>1. for Loop</h3>
                <p>The <code>for</code> loop is used when the number of iterations is known beforehand.</p>
                <pre><code>for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
            }</code></pre>

                <h3>2. while Loop</h3>
                <p>The <code>while</code> loop is used when the number of iterations is unknown, and the condition is checked before each iteration.</p>
                <pre><code>int i = 1;
            while (i <= 5) {
            System.out.println("Count: " + i);
            i++;
            }</code></pre>

                <h3>3. do-while Loop</h3>
                <p>The <code>do-while</code> loop is similar to <code>while</code>, but it guarantees at least one execution of the loop body.</p>
                <pre><code>int i = 1;
            do {
            System.out.println("Count: " + i);
            i++;
            } while (i <= 5);</code></pre>

                <h3>4. Enhanced for (for-each) Loop</h3>
                <p>Used to iterate over arrays and collections easily.</p>
                <pre><code>int[] numbers = {1, 2, 3, 4, 5};
            for (int num : numbers) {
            System.out.println(num);
            }</code></pre>

                <h3>Loop Control Statements</h3>
                <ul>
                <li><strong>break:</strong> Exits the loop immediately.</li>
                <li><strong>continue:</strong> Skips the current iteration and goes to the next one.</li>
                </ul>
                <pre><code>for (int i = 1; i <= 5; i++) {
            if (i == 3) continue;
            System.out.println(i);
            }</code></pre>

                <h3>When to Use Each Loop</h3>
                <ul>
                <li><strong>for</strong> – when the number of iterations is known</li>
                <li><strong>while</strong> – when looping until a condition becomes false</li>
                <li><strong>do-while</strong> – when the loop should run at least once</li>
                <li><strong>for-each</strong> – when working with arrays/collections</li>
                </ul>

                <blockquote><strong>Tip:</strong> Always be cautious of infinite loops caused by incorrect or missing loop conditions.</blockquote>
            `
        },
        functions: {
            title: "Functions (Methods) in Java",
            html: `
                <h2>Functions in Java</h2>
                <p>In Java, functions are called <strong>methods</strong>. They are blocks of code that perform a specific task, improve code reuse, and make programs more modular and easier to manage.</p>

                <h3>Basic Syntax</h3>
                <pre><code>returnType methodName(parameter1, parameter2, ...) {
            // method body
            return value;
            }</code></pre>

                <h3>Example: Method that adds two numbers</h3>
                <pre><code>public class Calculator {
            static int add(int a, int b) {
                return a + b;
            }

            public static void main(String[] args) {
                int result = add(5, 10);
                System.out.println("Sum: " + result);
            }
            }</code></pre>

                <h3>Types of Methods</h3>
                <ul>
                <li><strong>Predefined Methods:</strong> Built-in Java methods (e.g. <code>System.out.println()</code>, <code>Math.max()</code>).</li>
                <li><strong>User-defined Methods:</strong> Created by the programmer for custom tasks.</li>
                </ul>

                <h3>Method Overloading</h3>
                <p>Java allows multiple methods with the same name but different parameters.</p>
                <pre><code>class Printer {
            void print(String text) {
                System.out.println(text);
            }

            void print(int number) {
                System.out.println(number);
            }
            }</code></pre>

                <h3>Return Type</h3>
                <ul>
                <li><code>void</code> – the method returns nothing.</li>
                <li><code>int</code>, <code>double</code>, <code>String</code>, etc. – method returns a value of that type.</li>
                </ul>

                <h3>Static vs Non-Static Methods</h3>
                <ul>
                <li><strong>Static:</strong> Called using the class name, does not require object creation.</li>
                <li><strong>Non-static:</strong> Requires object creation to call the method.</li>
                </ul>
                <pre><code>public class MyClass {
            void greet() {
                System.out.println("Hello!");
            }

            public static void main(String[] args) {
                MyClass obj = new MyClass();
                obj.greet(); // non-static method
            }
            }</code></pre>

                <h3>Benefits of Using Methods</h3>
                <ul>
                <li>Code reusability</li>
                <li>Improves code readability</li>
                <li>Easier debugging and maintenance</li>
                </ul>

                <blockquote><strong>Tip:</strong> Always give methods meaningful names that reflect their purpose.</blockquote>
            `
        },
        array: {
            title: "Arrays in Java",
            html: `
                <h2>Arrays in Java</h2>
                <p>An array in Java is a data structure that can store multiple values of the same data type in a single variable.</p>

                <h3>Why Use Arrays?</h3>
                <ul>
                <li>To store multiple related values under a single name</li>
                <li>To access elements using indices</li>
                <li>Useful in loops and bulk data processing</li>
                </ul>

                <h3>Declaration and Initialization</h3>
                <pre><code>int[] numbers = new int[5]; // declaration with size
            int[] values = {10, 20, 30, 40, 50}; // declaration with values</code></pre>

                <h3>Accessing Array Elements</h3>
                <pre><code>System.out.println(values[2]); // Output: 30</code></pre>

                <h3>Updating Array Elements</h3>
                <pre><code>values[1] = 25; // updates second element to 25</code></pre>

                <h3>Looping through an Array</h3>
                <pre><code>for (int i = 0; i < values.length; i++) {
            System.out.println(values[i]);
            }</code></pre>

                <h3>Using Enhanced For Loop</h3>
                <pre><code>for (int value : values) {
            System.out.println(value);
            }</code></pre>

                <h3>Multidimensional Arrays</h3>
                <pre><code>int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6}
            };

            System.out.println(matrix[1][2]); // Output: 6</code></pre>

                <h3>Common Mistakes</h3>
                <ul>
                <li>Accessing out-of-bound indices (e.g., <code>arr[5]</code> in a size 5 array)</li>
                <li>Assuming arrays grow dynamically (use ArrayList for dynamic resizing)</li>
                </ul>

                <h3>Tips</h3>
                <ul>
                <li>Use <code>.length</code> to get array size</li>
                <li>Prefer enhanced for-loop for read-only iteration</li>
                <li>Use multidimensional arrays for tables or grids</li>
                </ul>
            `
        },
        strings: {
            title: "Strings in Java",
            html: `
                <h2>Strings in Java</h2>
                <p>A <strong>String</strong> in Java is an object that represents a sequence of characters. Unlike many languages, strings in Java are immutable.</p>

                <h3>Creating Strings</h3>
                <pre><code>String str1 = "Hello"; // Using string literal
            String str2 = new String("World"); // Using new keyword</code></pre>

                <h3>Common String Methods</h3>
                <ul>
                <li><code>length()</code> – Returns the length of the string</li>
                <li><code>charAt(index)</code> – Returns character at a given index</li>
                <li><code>substring(start, end)</code> – Extracts substring</li>
                <li><code>toLowerCase()</code>, <code>toUpperCase()</code></li>
                <li><code>trim()</code> – Removes whitespace</li>
                <li><code>equals()</code>, <code>equalsIgnoreCase()</code> – Compare strings</li>
                <li><code>contains()</code> – Checks if substring exists</li>
                <li><code>replace()</code> – Replace characters/substrings</li>
                </ul>

                <h3>Example</h3>
                <pre><code>String name = "Java Programming";
            System.out.println(name.length());          // Output: 16
            System.out.println(name.charAt(5));         // Output: P
            System.out.println(name.substring(5, 16));  // Output: Programming</code></pre>

                <h3>String Comparison</h3>
                <pre><code>String a = "hello";
            String b = "hello";
            String c = new String("hello");

            System.out.println(a == b);       // true (same reference)
            System.out.println(a == c);       // false (different object)
            System.out.println(a.equals(c));  // true (same content)</code></pre>

                <h3>StringBuilder and StringBuffer</h3>
                <p><strong>Why?</strong> String objects are immutable. Use these for mutable strings.</p>
                <ul>
                <li><strong>StringBuilder:</strong> Fast, not thread-safe</li>
                <li><strong>StringBuffer:</strong> Thread-safe, slightly slower</li>
                </ul>

                <pre><code>StringBuilder sb = new StringBuilder("Hello");
            sb.append(" World");
            System.out.println(sb); // Output: Hello World</code></pre>

                <h3>Important Notes</h3>
                <ul>
                <li>Strings are stored in a special memory area called <code>String Pool</code></li>
                <li>Use <code>equals()</code> to compare string content</li>
                <li>Use <code>StringBuilder</code> for large text operations</li>
                </ul>
            `
        },
        constructors: {
            title: "Constructors in Java",
            html: `
                <h2>Constructors in Java</h2>
                <p>A <strong>constructor</strong> is a special method that is called when an object is instantiated. It is used to initialize the object.</p>

                <h3>Characteristics of Constructors</h3>
                <ul>
                <li>Constructor name must match the class name.</li>
                <li>It does not have a return type (not even <code>void</code>).</li>
                <li>Called automatically when a new object is created using <code>new</code>.</li>
                </ul>

                <h3>Types of Constructors</h3>
                <ol>
                <li><strong>Default Constructor:</strong> No parameters.</li>
                <li><strong>Parameterized Constructor:</strong> Takes arguments to initialize object.</li>
                <li><strong>Copy Constructor:</strong> Creates a new object using an existing one (not provided by default).</li>
                </ol>

                <h3>Example: Default Constructor</h3>
                <pre><code>class Car {
            Car() {
                System.out.println("Car object created!");
            }
            public static void main(String[] args) {
                Car myCar = new Car();
            }
            }</code></pre>

                <h3>Example: Parameterized Constructor</h3>
                <pre><code>class Car {
            String model;
            Car(String m) {
                model = m;
            }

            public static void main(String[] args) {
                Car myCar = new Car("Tesla");
                System.out.println(myCar.model); // Output: Tesla
            }
            }</code></pre>

                <h3>Constructor Overloading</h3>
                <p>You can define multiple constructors with different parameter lists.</p>
                <pre><code>class Student {
            Student() {
                System.out.println("Default constructor");
            }

            Student(String name) {
                System.out.println("Hello " + name);
            }
            }</code></pre>

                <h3>Copy Constructor (Manual)</h3>
                <pre><code>class Book {
            String title;
            Book(String t) {
                title = t;
            }

            Book(Book b) {
                title = b.title;
            }

            public static void main(String[] args) {
                Book b1 = new Book("Java");
                Book b2 = new Book(b1);
                System.out.println(b2.title); // Output: Java
            }
            }</code></pre>

                <h3>Important Notes</h3>
                <ul>
                <li>If no constructor is defined, Java provides a default one automatically.</li>
                <li>Constructors can be overloaded but not overridden (since they aren't inherited).</li>
                </ul>
            `
        },

        oop_concepts: {
            title: "Object-Oriented Concepts in Java",
            html: `
                <h2>Object-Oriented Programming (OOP) in Java</h2>
                <p>Java is a fully object-oriented programming language (except for primitive types). OOP allows better modularity, reusability, and code organization.</p>

                <h3>Core OOP Principles</h3>
                <ol>
                <li><strong>Encapsulation:</strong> Wrapping data (variables) and methods into a single unit (class). Access is controlled using access modifiers.</li>
                <li><strong>Abstraction:</strong> Hiding internal details and showing only essential features using abstract classes or interfaces.</li>
                <li><strong>Inheritance:</strong> One class (child) can inherit fields and methods from another class (parent), promoting reusability.</li>
                <li><strong>Polymorphism:</strong> Allows a single interface to represent different underlying data types (method overloading & overriding).</li>
                </ol>

                <h3>1. Encapsulation Example</h3>
                <pre><code>public class Person {
            private String name;

            public void setName(String n) {
                name = n;
            }

            public String getName() {
                return name;
            }
            }</code></pre>

                <h3>2. Inheritance Example</h3>
                <pre><code>class Animal {
            void sound() {
                System.out.println("Animal makes sound");
            }
            }

            class Dog extends Animal {
            void sound() {
                System.out.println("Dog barks");
            }
            }</code></pre>

                <h3>3. Abstraction Example</h3>
                <pre><code>abstract class Shape {
            abstract void draw();
            }

            class Circle extends Shape {
            void draw() {
                System.out.println("Drawing Circle");
            }
            }</code></pre>

                <h3>4. Polymorphism Example</h3>
                <p><strong>Compile-time (Overloading):</strong></p>
                <pre><code>class Math {
            int add(int a, int b) { return a + b; }
            double add(double a, double b) { return a + b; }
            }</code></pre>

                <p><strong>Runtime (Overriding):</strong></p>
                <pre><code>Animal a = new Dog();
            a.sound(); // Output: Dog barks</code></pre>

                <h3>Benefits of OOP</h3>
                <ul>
                <li>Modularity: Code is divided into objects.</li>
                <li>Reusability: Inheritance helps reuse common logic.</li>
                <li>Scalability: Easy to manage and extend.</li>
                <li>Security: Encapsulation hides internal data.</li>
                </ul>
            `
        },
        accessModifiers: {
            title: "Access Modifiers in Java",
            html: `
                <h2>Access Modifiers in Java</h2>
                <p>Access Modifiers define the scope (visibility) of classes, methods, and variables. Java has four main access modifiers:</p>

                <table border="1" cellpadding="8" cellspacing="0">
                <thead>
                    <tr>
                    <th>Modifier</th>
                    <th>Class</th>
                    <th>Package</th>
                    <th>Subclass</th>
                    <th>World</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td><strong>public</strong></td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                    </tr>
                    <tr>
                    <td><strong>protected</strong></td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>❌</td>
                    </tr>
                    <tr>
                    <td><strong>default (no modifier)</strong></td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>❌</td>
                    <td>❌</td>
                    </tr>
                    <tr>
                    <td><strong>private</strong></td>
                    <td>✔</td>
                    <td>❌</td>
                    <td>❌</td>
                    <td>❌</td>
                    </tr>
                </tbody>
                </table>

                <h3>1. public</h3>
                <p>Accessible from anywhere in the program.</p>
                <pre><code>public class Demo {
            public int x = 10;
            }</code></pre>

                <h3>2. private</h3>
                <p>Accessible only within the same class.</p>
                <pre><code>class Demo {
            private int x = 10;
            }</code></pre>

                <h3>3. protected</h3>
                <p>Accessible within the same package and by subclasses in other packages.</p>
                <pre><code>class Parent {
            protected int x = 10;
            }</code></pre>

                <h3>4. default (no modifier)</h3>
                <p>Accessible only within the same package.</p>
                <pre><code>class Demo {
            int x = 10; // default access
            }</code></pre>

                <h3>When to Use What?</h3>
                <ul>
                <li><strong>Use <code>private</code></strong> for encapsulation.</li>
                <li><strong>Use <code>public</code></strong> for APIs or interfaces.</li>
                <li><strong>Use <code>protected</code></strong> when you expect subclasses.</li>
                <li><strong>Use default</strong> when keeping things package-private.</li>
                </ul>
            `
        },
        inheritance: {
            title: "Inheritance in Java",
            html: `
                <h2>Inheritance in Java</h2>
                <p>Inheritance is a mechanism in Java where one class can inherit fields and methods from another. It promotes code reusability and represents "is-a" relationships.</p>

                <h3>Types of Inheritance in Java</h3>
                <ul>
                <li><strong>Single Inheritance:</strong> One class inherits from another.</li>
                <li><strong>Multilevel Inheritance:</strong> A class inherits from a class which in turn inherits from another.</li>
                <li><strong>Hierarchical Inheritance:</strong> Multiple classes inherit from a single class.</li>
                </ul>
                <p><em>Note: Java does not support multiple inheritance with classes to avoid ambiguity, but it supports it via interfaces.</em></p>

                <h3>Syntax of Inheritance</h3>
                <pre><code>class Parent {
            void display() {
                System.out.println("Parent method");
            }
            }

            class Child extends Parent {
            void show() {
                System.out.println("Child method");
            }
            }

            public class Main {
            public static void main(String[] args) {
                Child c = new Child();
                c.display(); // From Parent
                c.show();    // From Child
            }
            }</code></pre>

                <h3>Key Keywords</h3>
                <ul>
                <li><code>extends</code>: Used for class inheritance</li>
                <li><code>super</code>: Refers to the parent class constructor or members</li>
                </ul>

                <h3>Using super keyword</h3>
                <pre><code>class Parent {
            int x = 5;
            }

            class Child extends Parent {
            int x = 10;

            void printX() {
                System.out.println(super.x); // Access parent x
            }
            }</code></pre>

                <h3>Constructors in Inheritance</h3>
                <p>When an object of the child class is created, the constructor of the parent class is called first.</p>
                <pre><code>class A {
            A() {
                System.out.println("Parent Constructor");
            }
            }

            class B extends A {
            B() {
                super(); // Optional, called automatically
                System.out.println("Child Constructor");
            }
            }</code></pre>

                <h3>Why Use Inheritance?</h3>
                <ul>
                <li>Code reuse</li>
                <li>Supports polymorphism and method overriding</li>
                <li>Logical hierarchy between classes</li>
                </ul>
            `
        },
        polymorphism: {
            title: "Polymorphism in Java",
            html: `
                <h2>Polymorphism in Java</h2>
                <p>Polymorphism allows objects to take on many forms. In Java, polymorphism lets you perform the same action in different ways, increasing flexibility and scalability of your code.</p>

                <h3>Types of Polymorphism</h3>
                <ul>
                <li><strong>Compile-time Polymorphism (Static)</strong> – Method Overloading</li>
                <li><strong>Run-time Polymorphism (Dynamic)</strong> – Method Overriding</li>
                </ul>

                <h3>1. Method Overloading (Compile-Time)</h3>
                <p>Method overloading occurs when multiple methods have the same name but different parameter lists.</p>
                <pre><code>class MathUtils {
            int add(int a, int b) {
                return a + b;
            }

            double add(double a, double b) {
                return a + b;
            }

            int add(int a, int b, int c) {
                return a + b + c;
            }
            }</code></pre>

                <h3>2. Method Overriding (Run-Time)</h3>
                <p>Method overriding happens when a subclass provides a specific implementation of a method declared in a parent class.</p>
                <pre><code>class Animal {
            void sound() {
                System.out.println("Animal makes a sound");
            }
            }

            class Dog extends Animal {
            void sound() {
                System.out.println("Dog barks");
            }
            }

            public class Main {
            public static void main(String[] args) {
                Animal a = new Dog(); // Upcasting
                a.sound(); // Outputs: Dog barks
            }
            }</code></pre>

                <h3>Key Concepts</h3>
                <ul>
                <li><strong>Upcasting:</strong> Using a parent class reference for a child class object</li>
                <li><strong>Dynamic Dispatch:</strong> Method call is resolved at runtime</li>
                </ul>

                <h3>Benefits of Polymorphism</h3>
                <ul>
                <li>Code Reusability</li>
                <li>Ease of Maintenance</li>
                <li>Supports extensibility and flexibility</li>
                </ul>

                <h3>Note:</h3>
                <p>Polymorphism is a key pillar of Object-Oriented Programming, alongside Inheritance, Abstraction, and Encapsulation.</p>
            `
        },
        abstractclasses: {
            title: "Abstract Classes in Java",
            html: `
                <h2>Abstract Classes in Java</h2>
                <p>An <strong>abstract class</strong> is a class that cannot be instantiated on its own and is meant to be extended by other classes. It can have both abstract methods (without body) and regular methods (with implementation).</p>

                <h3>Key Features</h3>
                <ul>
                <li>Declared using the <code>abstract</code> keyword.</li>
                <li>Can contain both abstract and non-abstract methods.</li>
                <li>Cannot be instantiated directly.</li>
                <li>Used to provide a base class with common code structure.</li>
                </ul>

                <h3>Syntax</h3>
                <pre><code>abstract class Animal {
            abstract void sound(); // abstract method
            void sleep() {         // concrete method
                System.out.println("Sleeping...");
            }
            }</code></pre>

                <h3>Extending Abstract Class</h3>
                <pre><code>class Dog extends Animal {
            void sound() {
                System.out.println("Dog barks");
            }
            }

            public class Main {
            public static void main(String[] args) {
                Animal myDog = new Dog();
                myDog.sound();  // Output: Dog barks
                myDog.sleep();  // Output: Sleeping...
            }
            }</code></pre>

                <h3>When to Use Abstract Classes</h3>
                <ul>
                <li>When you want to provide a common base with some default functionality.</li>
                <li>When multiple classes share common code but also require their own implementations.</li>
                <li>When using inheritance and method overriding for a hierarchy of related classes.</li>
                </ul>

                <h3>Difference Between Abstract Class and Interface</h3>
                <table border="1" cellpadding="6">
                <tr>
                    <th>Feature</th>
                    <th>Abstract Class</th>
                    <th>Interface</th>
                </tr>
                <tr>
                    <td>Methods</td>
                    <td>Can have both abstract and concrete methods</td>
                    <td>All methods are abstract (until Java 7); Java 8+ allows default/static methods</td>
                </tr>
                <tr>
                    <td>Inheritance</td>
                    <td>Supports single inheritance only</td>
                    <td>Can be implemented by multiple classes</td>
                </tr>
                <tr>
                    <td>Keyword</td>
                    <td><code>abstract</code></td>
                    <td><code>interface</code></td>
                </tr>
                </table>

                <h3>Note:</h3>
                <p>If you have methods with shared logic and want to enforce structure, abstract classes are the right choice.</p>
            `
        },
        interfaces: {
            title: "Interfaces in Java",
            html: `
                <h2>Interfaces in Java</h2>
                <p>An <strong>interface</strong> in Java is a reference type, similar to a class, that can contain only constants, method signatures, default methods, static methods, and nested types. Interfaces cannot contain instance fields or constructors.</p>

                <h3>Why Use Interfaces?</h3>
                <ul>
                <li>To achieve abstraction (100% abstraction prior to Java 8).</li>
                <li>To support multiple inheritance (a class can implement multiple interfaces).</li>
                <li>To separate "what to do" from "how to do it."</li>
                </ul>

                <h3>Syntax</h3>
                <pre><code>interface Animal {
            void sound(); // abstract method
            }</code></pre>

                <h3>Implementing an Interface</h3>
                <pre><code>class Dog implements Animal {
            public void sound() {
                System.out.println("Dog barks");
            }
            }</code></pre>

                <h3>Using the Interface</h3>
                <pre><code>public class Main {
            public static void main(String[] args) {
                Animal myDog = new Dog();
                myDog.sound();  // Output: Dog barks
            }
            }</code></pre>

                <h3>Java 8+ Interface Features</h3>
                <ul>
                <li><strong>Default Methods:</strong> Provide a body to methods in interfaces using <code>default</code>.</li>
                <li><strong>Static Methods:</strong> Belong to the interface and not to instances.</li>
                </ul>

                <h3>Example of Default and Static Methods</h3>
                <pre><code>interface MyInterface {
            default void greet() {
                System.out.println("Hello from default method!");
            }
            
            static void sayHi() {
                System.out.println("Hi from static method!");
            }
            }</code></pre>

                <h3>Multiple Interfaces</h3>
                <pre><code>interface Printable {
            void print();
            }

            interface Showable {
            void show();
            }

            class Demo implements Printable, Showable {
            public void print() {
                System.out.println("Printing...");
            }

            public void show() {
                System.out.println("Showing...");
            }
            }</code></pre>

                <h3>Difference Between Abstract Class and Interface</h3>
                <table border="1" cellpadding="6">
                <tr>
                    <th>Feature</th>
                    <th>Abstract Class</th>
                    <th>Interface</th>
                </tr>
                <tr>
                    <td>Methods</td>
                    <td>Can have abstract and concrete methods</td>
                    <td>Only abstract methods (Java 7), default/static methods (Java 8+)</td>
                </tr>
                <tr>
                    <td>Fields</td>
                    <td>Instance variables allowed</td>
                    <td>Only static final constants</td>
                </tr>
                <tr>
                    <td>Inheritance</td>
                    <td>Single inheritance</td>
                    <td>Multiple interfaces can be implemented</td>
                </tr>
                <tr>
                    <td>Constructor</td>
                    <td>Can have constructors</td>
                    <td>No constructors</td>
                </tr>
                </table>

                <h3>Use Cases</h3>
                <ul>
                <li>Use <strong>interfaces</strong> when unrelated classes must implement the same methods.</li>
                <li>Use <strong>abstract classes</strong> when classes are closely related with shared base logic.</li>
                </ul>
            `
        },
        exceptionhandling: {
            title: "Exception Handling in Java",
            html: `
                <h2>Exception Handling in Java</h2>
                <p>Exception handling in Java is a mechanism to handle runtime errors, allowing the normal flow of the application to continue.</p>

                <h3>What is an Exception?</h3>
                <p>An <strong>exception</strong> is an event that occurs during the execution of a program that disrupts its normal flow.</p>

                <h3>Types of Exceptions</h3>
                <ul>
                <li><strong>Checked Exceptions:</strong> Exceptions that are checked at compile-time (e.g., IOException, SQLException).</li>
                <li><strong>Unchecked Exceptions:</strong> Exceptions that occur at runtime (e.g., ArithmeticException, NullPointerException).</li>
                </ul>

                <h3>Exception Hierarchy</h3>
                <pre><code>
            Throwable
            ├── Exception
            │   ├── IOException
            │   └── SQLException
            ├── RuntimeException
            │   ├── NullPointerException
            │   └── ArithmeticException
            └── Error (e.g., OutOfMemoryError)
                </code></pre>

                <h3>Syntax: try-catch</h3>
                <pre><code>try {
            // Code that may throw an exception
            } catch (ExceptionType name) {
            // Code to handle the exception
            }</code></pre>

                <h3>Example</h3>
                <pre><code>public class Example {
            public static void main(String[] args) {
                try {
                int result = 10 / 0;
                } catch (ArithmeticException e) {
                System.out.println("Cannot divide by zero!");
                }
            }
            }</code></pre>

                <h3>try-catch-finally</h3>
                <pre><code>try {
            // risky code
            } catch (Exception e) {
            // handle exception
            } finally {
            // always executed
            }</code></pre>

                <h3>Multiple catch blocks</h3>
                <pre><code>try {
            int[] arr = new int[3];
            arr[5] = 10;
            } catch (ArithmeticException e) {
            System.out.println("Arithmetic error");
            } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index error");
            }</code></pre>

                <h3>throw Keyword</h3>
                <p>Used to throw an exception manually.</p>
                <pre><code>throw new ArithmeticException("This is a manual exception");</code></pre>

                <h3>throws Keyword</h3>
                <p>Used in method signature to declare exceptions.</p>
                <pre><code>public void readFile() throws IOException {
            // file reading logic
            }</code></pre>

                <h3>Custom Exceptions</h3>
                <pre><code>class MyException extends Exception {
            public MyException(String message) {
                super(message);
            }
            }</code></pre>

                <h3>Best Practices</h3>
                <ul>
                <li>Always catch the most specific exception first.</li>
                <li>Use finally block to release resources like file streams or database connections.</li>
                <li>Avoid using empty catch blocks.</li>
                </ul>

                <h3>Conclusion</h3>
                <p>Exception handling makes your Java programs more robust and less likely to crash unexpectedly. It's an essential part of Java application development.</p>
            `
        },
        threading: {
            title: "Multithreading in Java",
            html: `
                <h2>Multithreading in Java</h2>
                <p>Multithreading is a Java feature that allows the concurrent execution of two or more threads. It helps in performing multiple operations simultaneously, which improves performance especially in CPU-intensive tasks.</p>

                <h3>What is a Thread?</h3>
                <p>A thread is the smallest unit of execution in a program. In Java, every program has at least one thread (the main thread).</p>

                <h3>Benefits of Multithreading</h3>
                <ul>
                <li>Efficient use of CPU</li>
                <li>Improved application performance</li>
                <li>Concurrent task execution</li>
                <li>Better resource sharing</li>
                </ul>

                <h3>Ways to Create Threads</h3>
                <ol>
                <li>By extending the <code>Thread</code> class</li>
                <li>By implementing the <code>Runnable</code> interface</li>
                </ol>

                <h4>1. Extending Thread Class</h4>
                <pre><code>class MyThread extends Thread {
            public void run() {
                System.out.println("Thread is running...");
            }
            }

            public class Test {
            public static void main(String[] args) {
                MyThread t1 = new MyThread();
                t1.start();
            }
            }</code></pre>

                <h4>2. Implementing Runnable Interface</h4>
                <pre><code>class MyRunnable implements Runnable {
            public void run() {
                System.out.println("Runnable thread running...");
            }
            }

            public class Test {
            public static void main(String[] args) {
                Thread t1 = new Thread(new MyRunnable());
                t1.start();
            }
            }</code></pre>

                <h3>Thread Lifecycle</h3>
                <ol>
                <li><strong>New</strong>: Thread object is created.</li>
                <li><strong>Runnable</strong>: <code>start()</code> is called.</li>
                <li><strong>Running</strong>: Thread is executing.</li>
                <li><strong>Waiting/Blocked</strong>: Thread is paused or waiting.</li>
                <li><strong>Terminated</strong>: Thread finishes execution.</li>
                </ol>

                <h3>Thread Methods</h3>
                <ul>
                <li><code>start()</code>: Starts the thread</li>
                <li><code>run()</code>: Contains the code executed by the thread</li>
                <li><code>sleep(ms)</code>: Puts the thread to sleep</li>
                <li><code>join()</code>: Waits for another thread to finish</li>
                <li><code>setPriority()</code>: Sets thread priority</li>
                <li><code>isAlive()</code>: Checks if thread is running</li>
                </ul>

                <h3>Synchronization</h3>
                <p>When multiple threads access the same resource, <strong>synchronization</strong> is used to avoid conflicts.</p>
                <pre><code>synchronized void print() {
            // only one thread can access this at a time
            }</code></pre>

                <h3>Example with Synchronization</h3>
                <pre><code>class Counter {
            int count = 0;

            synchronized void increment() {
                count++;
            }
            }

            public class Test {
            public static void main(String[] args) {
                Counter counter = new Counter();

                Thread t1 = new Thread(() -> {
                for (int i = 0; i < 1000; i++) counter.increment();
                });

                Thread t2 = new Thread(() -> {
                for (int i = 0; i < 1000; i++) counter.increment();
                });

                t1.start();
                t2.start();

                try {
                t1.join();
                t2.join();
                } catch (Exception e) {
                System.out.println(e);
                }

                System.out.println("Count: " + counter.count);
            }
            }</code></pre>

                <h3>Conclusion</h3>
                <p>Multithreading enhances performance by allowing simultaneous execution. Proper thread management and synchronization are essential for avoiding data inconsistencies.</p>
            `
        },
        encapsulation: {
            title: "Encapsulation in Java",
            html: `
                <h2>Encapsulation in Java</h2>
                <p><strong>Encapsulation</strong> is one of the fundamental concepts in object-oriented programming (OOP). It refers to the practice of wrapping data (variables) and code (methods) together into a single unit, typically a class. This helps protect the data and ensures that it is used properly.</p>

                <h3>Key Concepts</h3>
                <ul>
                <li>Keep data members <code>private</code></li>
                <li>Provide <code>public</code> getter and setter methods to access and update the value of private variables</li>
                </ul>

                <h3>Benefits of Encapsulation</h3>
                <ul>
                <li>Improves code maintainability and flexibility</li>
                <li>Prevents unauthorized access to class members</li>
                <li>Makes the class easy to test and debug</li>
                <li>Protects internal state of the object</li>
                </ul>

                <h3>Example</h3>
                <pre><code>class Student {
            private String name;
            private int age;

            // Getter method for name
            public String getName() {
                return name;
            }

            // Setter method for name
            public void setName(String newName) {
                name = newName;
            }

            // Getter method for age
            public int getAge() {
                return age;
            }

            // Setter method for age
            public void setAge(int newAge) {
                if (newAge > 0) {
                age = newAge;
                }
            }
            }

            public class Main {
            public static void main(String[] args) {
                Student s = new Student();
                s.setName("John");
                s.setAge(20);

                System.out.println("Name: " + s.getName());
                System.out.println("Age: " + s.getAge());
            }
            }</code></pre>

                <h3>Why Use Getters and Setters?</h3>
                <p>Using getters and setters instead of making variables public provides better control over how variables are accessed or modified.</p>

                <pre><code>// Bad Practice - public field
            public class Person {
            public int age; // anyone can modify this directly
            }</code></pre>

                <pre><code>// Good Practice - encapsulated field
            public class Person {
            private int age;

            public int getAge() { return age; }
            public void setAge(int age) {
                if (age > 0) this.age = age;
            }
            }</code></pre>

                <h3>Conclusion</h3>
                <p>Encapsulation helps you hide internal implementation details of a class and only expose what's necessary. This makes code more secure and robust.</p>
            `
        },
    },
    

  },
  Cpp: {
    name:"C++",
    topics:{
        introduction: {
            title: "Introduction to C++",
            html: `
                <h2>Introduction to C++</h2>
                <p><strong>C++</strong> is a powerful, high-performance, general-purpose programming language. It was developed by <strong>Bjarne Stroustrup</strong> as an extension to the C language and includes features for object-oriented programming (OOP).</p>

                <h3>Key Features of C++</h3>
                <ul>
                <li>Supports both <strong>procedural</strong> and <strong>object-oriented</strong> programming</li>
                <li>Strongly typed and compiled language</li>
                <li>Supports abstraction, encapsulation, inheritance, and polymorphism</li>
                <li>Allows direct manipulation of hardware resources (via pointers)</li>
                <li>Standard Template Library (STL) for data structures and algorithms</li>
                </ul>

                <h3>Why Learn C++?</h3>
                <ul>
                <li>Widely used in system/software development, game engines, real-time simulations</li>
                <li>Gives you control over system resources</li>
                <li>Excellent language for learning core programming concepts and OOP</li>
                <li>Used by top companies for performance-critical applications</li>
                </ul>

                <h3>Hello World Example</h3>
                <pre><code>#include &lt;iostream&gt;
            using namespace std;

            int main() {
                cout &lt;&lt; "Hello, World!" &lt;&lt; endl;
                return 0;
            }</code></pre>

                <h3>C++ vs C</h3>
                <ul>
                <li><strong>C</strong> is procedural, while <strong>C++</strong> supports OOP</li>
                <li>C++ allows for more abstraction and modular design</li>
                <li>Memory management in C++ can be done using constructors/destructors</li>
                </ul>

                <h3>Applications of C++</h3>
                <ul>
                <li>Operating Systems (e.g., Windows, parts of Linux)</li>
                <li>Game development (Unreal Engine, etc.)</li>
                <li>GUI-based applications</li>
                <li>Database management software</li>
                <li>Embedded systems</li>
                </ul>

                <h3>Conclusion</h3>
                <p>C++ is a foundational language that blends low-level and high-level programming capabilities. Learning C++ provides a strong base for understanding both system-level programming and advanced software development concepts.</p>
            `
        },
        variables_datatypes: {
            title: "Variables and Data Types in C++",
            html: `
                <h2>Variables and Data Types in C++</h2>
                <p>Variables in C++ are used to store data. Each variable must be declared with a specific <strong>data type</strong> that determines the size and layout of the variable's memory.</p>

                <h3>Variable Declaration</h3>
                <p>To declare a variable, you specify the type followed by the name:</p>
                <pre><code>int age;
            float price;
            char grade;
            </code></pre>

                <h3>Initialization</h3>
                <p>You can assign a value at the time of declaration:</p>
                <pre><code>int age = 25;
            float price = 19.99;
            char grade = 'A';
            </code></pre>

                <h3>Common Data Types in C++</h3>
                <table border="1" cellpadding="6" style="border-collapse: collapse;">
                <thead>
                    <tr><th>Type</th><th>Description</th><th>Example</th></tr>
                </thead>
                <tbody>
                    <tr><td><code>int</code></td><td>Stores integers</td><td><code>int count = 10;</code></td></tr>
                    <tr><td><code>float</code></td><td>Stores floating-point numbers (6-7 digits)</td><td><code>float pi = 3.14;</code></td></tr>
                    <tr><td><code>double</code></td><td>Stores double-precision floating-point numbers</td><td><code>double gravity = 9.80665;</code></td></tr>
                    <tr><td><code>char</code></td><td>Stores a single character</td><td><code>char letter = 'A';</code></td></tr>
                    <tr><td><code>bool</code></td><td>Stores boolean values (true or false)</td><td><code>bool isOpen = true;</code></td></tr>
                </tbody>
                </table>

                <h3>Rules for Naming Variables</h3>
                <ul>
                <li>Must begin with a letter (A–Z, a–z) or underscore (_)</li>
                <li>Can contain letters, digits (0–9), and underscores</li>
                <li>Case-sensitive (e.g., <code>value</code> and <code>Value</code> are different)</li>
                <li>Cannot use C++ keywords (like <code>int</code>, <code>class</code>, etc.)</li>
                </ul>

                <h3>Type Modifiers</h3>
                <ul>
                <li><code>short</code>, <code>long</code>, <code>signed</code>, <code>unsigned</code></li>
                <li>Example: <code>unsigned int u = 42;</code></li>
                </ul>

                <h3>Type Inference (C++11)</h3>
                <p>C++11 introduced the <code>auto</code> keyword to automatically deduce the data type:</p>
                <pre><code>auto x = 42;     // int
            auto y = 3.14;   // double</code></pre>

                <h3>Example Program</h3>
                <pre><code>#include &lt;iostream&gt;
            using namespace std;

            int main() {
                int age = 20;
                float height = 5.9;
                char grade = 'A';
                bool passed = true;

                cout &lt;&lt; "Age: " &lt;&lt; age &lt;&lt; endl;
                cout &lt;&lt; "Height: " &lt;&lt; height &lt;&lt; endl;
                cout &lt;&lt; "Grade: " &lt;&lt; grade &lt;&lt; endl;
                cout &lt;&lt; "Passed: " &lt;&lt; passed &lt;&lt; endl;

                return 0;
            }</code></pre>
            `
        },
        operators: {
            title: "Operators in C++",
            html: `
                <h2>Operators in C++</h2>
                <p>Operators are symbols that perform operations on variables and values. C++ includes a rich set of operators categorized by function.</p>

                <h3>1. Arithmetic Operators</h3>
                <table border="1" cellpadding="6" style="border-collapse: collapse;">
                <thead>
                    <tr><th>Operator</th><th>Description</th><th>Example</th></tr>
                </thead>
                <tbody>
                    <tr><td><code>+</code></td><td>Addition</td><td><code>a + b</code></td></tr>
                    <tr><td><code>-</code></td><td>Subtraction</td><td><code>a - b</code></td></tr>
                    <tr><td><code>*</code></td><td>Multiplication</td><td><code>a * b</code></td></tr>
                    <tr><td><code>/</code></td><td>Division</td><td><code>a / b</code></td></tr>
                    <tr><td><code>%</code></td><td>Modulus (remainder)</td><td><code>a % b</code></td></tr>
                </tbody>
                </table>

                <h3>2. Relational (Comparison) Operators</h3>
                <ul>
                <li><code>==</code> : Equal to</li>
                <li><code>!=</code> : Not equal to</li>
                <li><code>&gt;</code> : Greater than</li>
                <li><code>&lt;</code> : Less than</li>
                <li><code>&gt;=</code> : Greater than or equal to</li>
                <li><code>&lt;=</code> : Less than or equal to</li>
                </ul>

                <h3>3. Logical Operators</h3>
                <ul>
                <li><code>&&</code> : Logical AND</li>
                <li><code>||</code> : Logical OR</li>
                <li><code>!</code> : Logical NOT</li>
                </ul>

                <h3>4. Assignment Operators</h3>
                <p>Used to assign values to variables.</p>
                <ul>
                <li><code>=</code> : Assign</li>
                <li><code>+=</code> : Add and assign</li>
                <li><code>-=</code> : Subtract and assign</li>
                <li><code>*=</code> : Multiply and assign</li>
                <li><code>/=</code> : Divide and assign</li>
                <li><code>%=</code> : Modulus and assign</li>
                </ul>

                <h3>5. Increment/Decrement Operators</h3>
                <ul>
                <li><code>++</code> : Increment</li>
                <li><code>--</code> : Decrement</li>
                </ul>
                <p>These can be used in both prefix and postfix forms:</p>
                <pre><code>++a;  // Prefix
            a++;  // Postfix</code></pre>

                <h3>6. Bitwise Operators</h3>
                <p>Work at the bit level.</p>
                <ul>
                <li><code>&</code> : AND</li>
                <li><code>|</code> : OR</li>
                <li><code>^</code> : XOR</li>
                <li><code>~</code> : NOT</li>
                <li><code>&lt;&lt;</code> : Left shift</li>
                <li><code>&gt;&gt;</code> : Right shift</li>
                </ul>

                <h3>7. Example Program</h3>
                <pre><code>#include &lt;iostream&gt;
            using namespace std;

            int main() {
                int a = 10, b = 3;
                cout &lt;&lt; "a + b = " &lt;&lt; a + b &lt;&lt; endl;
                cout &lt;&lt; "a - b = " &lt;&lt; a - b &lt;&lt; endl;
                cout &lt;&lt; "a * b = " &lt;&lt; a * b &lt;&lt; endl;
                cout &lt;&lt; "a / b = " &lt;&lt; a / b &lt;&lt; endl;
                cout &lt;&lt; "a % b = " &lt;&lt; a % b &lt;&lt; endl;

                cout &lt;&lt; "a &lt; b: " &lt;&lt; (a &lt; b) &lt;&lt; endl;
                cout &lt;&lt; "a == b: " &lt;&lt; (a == b) &lt;&lt; endl;

                return 0;
            }</code></pre>
            `
        },
        controlStatements: {
            title: "Control Statements in C++",
            html: `
                <h2>Control Statements in C++</h2>
                <p>Control statements in C++ manage the flow of execution in a program. They allow the code to make decisions, repeat blocks, or jump between sections.</p>

                <h3>1. <code>if</code> Statement</h3>
                <p>Used to execute a block of code only if a specific condition is true.</p>
                <pre><code>int age = 20;
            if (age &gt;= 18) {
            cout &lt;&lt; "You are eligible to vote.";
            }</code></pre>

                <h3>2. <code>if-else</code> Statement</h3>
                <p>Provides an alternate block of code if the condition is false.</p>
                <pre><code>int num = 10;
            if (num % 2 == 0) {
            cout &lt;&lt; "Even number";
            } else {
            cout &lt;&lt; "Odd number";
            }</code></pre>

                <h3>3. <code>else-if</code> Ladder</h3>
                <p>Checks multiple conditions sequentially.</p>
                <pre><code>int marks = 85;
            if (marks &gt;= 90) {
            cout &lt;&lt; "Grade A";
            } else if (marks &gt;= 75) {
            cout &lt;&lt; "Grade B";
            } else {
            cout &lt;&lt; "Grade C";
            }</code></pre>

                <h3>4. <code>switch</code> Statement</h3>
                <p>The switch statement tests a variable against multiple values (cases).</p>
                <pre><code>int day = 3;
            switch (day) {
            case 1:
                cout &lt;&lt; "Monday";
                break;
            case 2:
                cout &lt;&lt; "Tuesday";
                break;
            case 3:
                cout &lt;&lt; "Wednesday";
                break;
            default:
                cout &lt;&lt; "Invalid day";
            }</code></pre>

                <p><strong>Note:</strong> Always use <code>break</code> to prevent fall-through unless intentionally required.</p>

                <h3>5. <code>Nested if</code></h3>
                <p>You can place one if-else inside another.</p>
                <pre><code>int a = 5, b = 10;
            if (a &lt; b) {
            if (a &gt; 0) {
                cout &lt;&lt; "a is positive and less than b";
            }
            }</code></pre>
            `
        },
        loops: {
            title: "Loops in C++",
            html: `
                <h2>Loops in C++</h2>
                <p>Loops are used to execute a block of code repeatedly until a certain condition is met.</p>

                <h3>1. <code>while</code> Loop</h3>
                <p>The <code>while</code> loop checks the condition before executing the block.</p>
                <pre><code>int i = 1;
            while (i &lt;= 5) {
            cout &lt;&lt; i &lt;&lt; " ";
            i++;
            }</code></pre>

                <h3>2. <code>do-while</code> Loop</h3>
                <p>The <code>do-while</code> loop executes the block at least once before checking the condition.</p>
                <pre><code>int i = 1;
            do {
            cout &lt;&lt; i &lt;&lt; " ";
            i++;
            } while (i &lt;= 5);</code></pre>

                <h3>3. <code>for</code> Loop</h3>
                <p>The <code>for</code> loop includes initialization, condition, and update in a single line.</p>
                <pre><code>for (int i = 1; i &lt;= 5; i++) {
            cout &lt;&lt; i &lt;&lt; " ";
            }</code></pre>

                <h3>4. Nested Loops</h3>
                <p>You can use loops inside other loops. Common in pattern printing and matrix traversal.</p>
                <pre><code>for (int i = 1; i &lt;= 3; i++) {
            for (int j = 1; j &lt;= 3; j++) {
                cout &lt;&lt; "* ";
            }
            cout &lt;&lt; endl;
            }</code></pre>

                <h3>5. Loop Control Statements</h3>
                <ul>
                <li><code>break</code>: Exits the loop prematurely</li>
                <li><code>continue</code>: Skips the current iteration and continues with the next one</li>
                </ul>

                <h3>Example: Sum of First 10 Numbers</h3>
                <pre><code>int sum = 0;
            for (int i = 1; i &lt;= 10; i++) {
            sum += i;
            }
            cout &lt;&lt; "Sum: " &lt;&lt; sum;</code></pre>
            `
        },
        functions: {
            title: "Functions in C++",
            html: `
                <h2>Functions in C++</h2>
                <p>A function is a block of code that performs a specific task. Functions help in modularizing code and avoiding repetition.</p>

                <h3>Types of Functions</h3>
                <ul>
                <li><strong>Library Functions</strong> – Provided by C++ standard libraries (e.g., <code>sqrt()</code>, <code>pow()</code>)</li>
                <li><strong>User-defined Functions</strong> – Created by the programmer</li>
                </ul>

                <h3>Function Syntax</h3>
                <pre><code>returnType functionName(parameters) {
            // body of function
            }</code></pre>

                <h3>Example: Function Without Parameters</h3>
                <pre><code>void greet() {
            cout &lt;&lt; "Hello from a function!" &lt;&lt; endl;
            }</code></pre>

                <h3>Example: Function With Parameters</h3>
                <pre><code>int add(int a, int b) {
            return a + b;
            }</code></pre>

                <h3>Calling a Function</h3>
                <pre><code>int result = add(5, 3);</code></pre>

                <h3>Function Prototypes</h3>
                <p>Function declaration before main is called a prototype. Useful when defining function after main.</p>
                <pre><code>int add(int, int); // prototype

            int main() {
            int sum = add(10, 20);
            cout &lt;&lt; "Sum: " &lt;&lt; sum;
            }

            int add(int x, int y) {
            return x + y;
            }</code></pre>

                <h3>Inline Functions</h3>
                <p>Used to reduce function call overhead.</p>
                <pre><code>inline int square(int x) {
            return x * x;
            }</code></pre>

                <h3>Default Arguments</h3>
                <p>You can provide default values to parameters.</p>
                <pre><code>int power(int base, int exp = 2) {
            int result = 1;
            for (int i = 0; i &lt; exp; i++)
                result *= base;
            return result;
            }</code></pre>

                <h3>Function Overloading</h3>
                <p>Same function name with different parameters.</p>
                <pre><code>int multiply(int a, int b) {
            return a * b;
            }
            float multiply(float a, float b) {
            return a * b;
            }</code></pre>

                <h3>Benefits of Functions</h3>
                <ul>
                <li>Code reuse</li>
                <li>Improved readability</li>
                <li>Easier testing and debugging</li>
                </ul>
            `
        },
        arrays: {
            title: "Arrays in C++",
            html: `
                <h2>Arrays in C++</h2>
                <p>An array is a collection of elements of the same type placed in contiguous memory locations. It allows storing multiple values using a single variable name.</p>

                <h3>Declaring an Array</h3>
                <pre><code>type arrayName[size];</code></pre>
                <p>Example:</p>
                <pre><code>int numbers[5];</code></pre>

                <h3>Initializing an Array</h3>
                <pre><code>int numbers[5] = {1, 2, 3, 4, 5};</code></pre>
                <p>You can also let the compiler determine the size:</p>
                <pre><code>int numbers[] = {1, 2, 3};</code></pre>

                <h3>Accessing Elements</h3>
                <p>Array elements are accessed using their index (starting from 0):</p>
                <pre><code>cout &lt;&lt; numbers[0]; // prints 1</code></pre>

                <h3>Modifying Elements</h3>
                <pre><code>numbers[2] = 99; // changes 3rd element to 99</code></pre>

                <h3>Input and Output of Array</h3>
                <pre><code>int arr[5];
            cout &lt;&lt; "Enter 5 numbers: ";
            for(int i = 0; i &lt; 5; i++) {
            cin &gt;&gt; arr[i];
            }

            cout &lt;&lt; "You entered: ";
            for(int i = 0; i &lt; 5; i++) {
            cout &lt;&lt; arr[i] &lt;&lt; " ";
            }</code></pre>

                <h3>Multidimensional Arrays</h3>
                <p>Used to store tables or matrices:</p>
                <pre><code>int matrix[2][3] = {
            {1, 2, 3},
            {4, 5, 6}
            };</code></pre>
                <p>Accessing an element:</p>
                <pre><code>cout &lt;&lt; matrix[1][2]; // prints 6</code></pre>

                <h3>Common Mistakes</h3>
                <ul>
                <li>Accessing out-of-bound indices causes undefined behavior.</li>
                <li>Uninitialized arrays contain garbage values.</li>
                </ul>

                <h3>Limitations</h3>
                <ul>
                <li>Fixed size — cannot change during runtime.</li>
                <li>To overcome this, C++ offers vectors (dynamic arrays).</li>
                </ul>

                <h3>Conclusion</h3>
                <p>Arrays are simple and efficient for storing multiple values, but require careful index management and fixed sizes.</p>
            `
        },
        strings: {
            title: "Strings in C++",
            html: `
                <h2>Strings in C++</h2>
                <p>In C++, strings can be handled in two main ways:</p>
                <ul>
                <li>Using <code>char</code> arrays (C-style strings)</li>
                <li>Using the <code>string</code> class from the C++ Standard Library</li>
                </ul>

                <h3>1. C-style Strings</h3>
                <p>A C-style string is an array of characters terminated by a null character (<code>\\0</code>).</p>
                <pre><code>char str[] = "Hello";</code></pre>
                <p>You can also declare it like this:</p>
                <pre><code>char str[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};</code></pre>

                <h3>Common Functions from &lt;cstring&gt;</h3>
                <ul>
                <li><code>strlen(str)</code> – Get length</li>
                <li><code>strcpy(dest, src)</code> – Copy string</li>
                <li><code>strcmp(s1, s2)</code> – Compare strings</li>
                <li><code>strcat(dest, src)</code> – Concatenate</li>
                </ul>

                <h3>Example</h3>
                <pre><code>#include &lt;iostream&gt;
            #include &lt;cstring&gt;
            using namespace std;

            int main() {
            char str1[20] = "Hello";
            char str2[] = "World";
            strcat(str1, str2);
            cout &lt;&lt; str1; // HelloWorld
            return 0;
            }</code></pre>

                <h3>2. Using the <code>string</code> Class</h3>
                <p>C++ provides the <code>string</code> class in the <code>&lt;string&gt;</code> header for easy string manipulation.</p>
                <pre><code>#include &lt;iostream&gt;
            #include &lt;string&gt;
            using namespace std;

            int main() {
            string name = "Alice";
            cout &lt;&lt; "Hello, " &lt;&lt; name;
            return 0;
            }</code></pre>

                <h3>Common <code>string</code> Functions</h3>
                <ul>
                <li><code>s.length()</code> – Length of string</li>
                <li><code>s.empty()</code> – Check if empty</li>
                <li><code>s.append("text")</code> – Append</li>
                <li><code>s.substr(start, len)</code> – Substring</li>
                <li><code>s.find("sub")</code> – Find index</li>
                <li><code>s.replace()</code> – Replace part</li>
                </ul>

                <h3>String Concatenation</h3>
                <pre><code>string a = "Hello";
            string b = "World";
            string c = a + " " + b; // Hello World</code></pre>

                <h3>Looping Through a String</h3>
                <pre><code>string s = "Code";
            for (int i = 0; i &lt; s.length(); i++) {
            cout &lt;&lt; s[i] &lt;&lt; " ";
            }</code></pre>

                <h3>Comparison</h3>
                <pre><code>if (s1 == s2) {
            cout &lt;&lt; "Equal";
            }</code></pre>

                <h3>Conclusion</h3>
                <p>Use <code>string</code> class for ease and readability. Use C-style strings only for legacy or system-level programming.</p>
            `
        },
        pointers: {
            title: "Pointers in C++",
            html: `
                <h2>Pointers in C++</h2>
                <p>Pointers are variables that store the memory address of another variable. They are powerful but must be used with care.</p>

                <h3>Declaring a Pointer</h3>
                <pre><code>int a = 10;
            int* ptr = &a;  // ptr holds the address of a</code></pre>

                <h3>Accessing Value with Pointer (Dereferencing)</h3>
                <p>Use <code>*</code> to get the value at the memory address:</p>
                <pre><code>cout << *ptr;  // Outputs 10</code></pre>

                <h3>Pointer Operators</h3>
                <ul>
                <li><code>&</code> – Address-of operator</li>
                <li><code>*</code> – Dereference operator</li>
                </ul>

                <h3>Example</h3>
                <pre><code>#include &lt;iostream&gt;
            using namespace std;

            int main() {
            int var = 42;
            int* p = &var;
            cout << "Address: " << p << endl;
            cout << "Value: " << *p << endl;
            return 0;
            }</code></pre>

                <h3>Pointer to Pointer</h3>
                <pre><code>int x = 5;
            int* p = &x;
            int** pp = &p;

            cout << **pp;  // Outputs 5</code></pre>

                <h3>Null Pointer</h3>
                <pre><code>int* ptr = nullptr;  // Points to nothing</code></pre>

                <h3>Pointer Arithmetic</h3>
                <pre><code>int arr[] = {10, 20, 30};
            int* p = arr;
            cout << *(p + 1);  // Outputs 20</code></pre>

                <h3>Pointers and Arrays</h3>
                <p>Array name is itself a pointer to the first element.</p>
                <pre><code>int arr[3] = {1, 2, 3};
            cout << *arr;  // Outputs 1</code></pre>

                <h3>Dynamic Memory with Pointers</h3>
                <pre><code>int* a = new int;  // allocate memory
            *a = 100;
            delete a;         // free memory</code></pre>

                <h3>Best Practices</h3>
                <ul>
                <li>Always initialize pointers</li>
                <li>Use <code>delete</code> to avoid memory leaks</li>
                <li>Use <code>nullptr</code> instead of NULL</li>
                </ul>

                <h3>Conclusion</h3>
                <p>Pointers give you direct control over memory and are essential in systems programming, dynamic memory, and data structures.</p>
            `
        },
        oop: {
            title: "Object-Oriented Programming in C++",
            html: `
                <h2>Object-Oriented Programming in C++</h2>
                <p>C++ supports Object-Oriented Programming (OOP), which helps in designing modular, reusable, and maintainable code.</p>

                <h3>Key Concepts of OOP</h3>
                <ul>
                <li><strong>Class:</strong> Blueprint for creating objects.</li>
                <li><strong>Object:</strong> Instance of a class.</li>
                <li><strong>Encapsulation:</strong> Binding data and functions together.</li>
                <li><strong>Abstraction:</strong> Hiding internal details and showing only essential features.</li>
                <li><strong>Inheritance:</strong> One class can inherit properties from another.</li>
                <li><strong>Polymorphism:</strong> One interface, many implementations.</li>
                </ul>

                <h3>Creating a Class</h3>
                <pre><code>class Student {
            public:
                string name;
                int age;

                void display() {
                cout << "Name: " << name << ", Age: " << age << endl;
                }
            };</code></pre>

                <h3>Creating an Object</h3>
                <pre><code>int main() {
            Student s1;
            s1.name = "Alice";
            s1.age = 20;
            s1.display();
            return 0;
            }</code></pre>

                <h3>Access Modifiers</h3>
                <ul>
                <li><code>public</code> – accessible everywhere</li>
                <li><code>private</code> – accessible only within the class</li>
                <li><code>protected</code> – accessible in the class and derived classes</li>
                </ul>

                <h3>Constructor</h3>
                <p>Special method automatically called when an object is created.</p>
                <pre><code>class Student {
            public:
                Student() {
                cout << "Constructor Called" << endl;
                }
            };</code></pre>

                <h3>Destructor</h3>
                <p>Special method called when object is destroyed.</p>
                <pre><code>~Student() {
            cout << "Destructor Called" << endl;
            }</code></pre>

                <h3>Inheritance Example</h3>
                <pre><code>class Person {
            public:
                string name;
            };

            class Student : public Person {
            public:
                int roll;
            };</code></pre>

                <h3>Polymorphism Example</h3>
                <p>Function Overloading and Overriding</p>
                <pre><code>class Print {
            public:
                void show(int a) {
                cout << "Integer: " << a << endl;
                }

                void show(string s) {
                cout << "String: " << s << endl;
                }
            };</code></pre>

                <h3>Conclusion</h3>
                <p>OOP in C++ allows for building large, modular, and reusable code using real-world modeling and abstraction.</p>
            `
        },
        inheritance: {
            title: "Inheritance in C++",
            html: `
                <h2>Inheritance in C++</h2>
                <p>Inheritance is one of the key features of Object-Oriented Programming in C++. It allows a class (derived class) to inherit the properties and behavior (data members and member functions) of another class (base class).</p>

                <h3>Why Use Inheritance?</h3>
                <ul>
                <li>Code reusability</li>
                <li>Establish a relationship between classes</li>
                <li>Extensibility</li>
                <li>Improved code structure and readability</li>
                </ul>

                <h3>Types of Inheritance</h3>
                <ul>
                <li><strong>Single Inheritance:</strong> One derived class inherits from one base class.</li>
                <li><strong>Multiple Inheritance:</strong> One derived class inherits from more than one base class.</li>
                <li><strong>Multilevel Inheritance:</strong> A class is derived from another derived class.</li>
                <li><strong>Hierarchical Inheritance:</strong> Multiple classes inherit from a single base class.</li>
                <li><strong>Hybrid Inheritance:</strong> Combination of two or more types of inheritance.</li>
                </ul>

                <h3>Syntax</h3>
                <pre><code>class Base {
            public:
                void display() {
                cout << "Base class" << endl;
                }
            };

            class Derived : public Base {
            public:
                void show() {
                cout << "Derived class" << endl;
                }
            };

            int main() {
            Derived d;
            d.display();  // inherited method
            d.show();     // own method
            return 0;
            }</code></pre>

                <h3>Access Specifiers in Inheritance</h3>
                <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
                <thead>
                    <tr>
                    <th>Base Class Access</th>
                    <th>Public Inheritance</th>
                    <th>Protected Inheritance</th>
                    <th>Private Inheritance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>public members</td>
                    <td>public</td>
                    <td>protected</td>
                    <td>private</td>
                    </tr>
                    <tr>
                    <td>protected members</td>
                    <td>protected</td>
                    <td>protected</td>
                    <td>private</td>
                    </tr>
                    <tr>
                    <td>private members</td>
                    <td colspan="3">Not accessible directly</td>
                    </tr>
                </tbody>
                </table>

                <h3>Multilevel Inheritance Example</h3>
                <pre><code>class A {
            public:
                void aFunc() {
                cout << "Class A" << endl;
                }
            };

            class B : public A {
            public:
                void bFunc() {
                cout << "Class B" << endl;
                }
            };

            class C : public B {
            public:
                void cFunc() {
                cout << "Class C" << endl;
                }
            };

            int main() {
            C obj;
            obj.aFunc();
            obj.bFunc();
            obj.cFunc();
            return 0;
            }</code></pre>

                <h3>Conclusion</h3>
                <p>Inheritance enables code reusability and hierarchical classification. It’s a core principle that makes C++ powerful for building large applications.</p>
            `
        },
        constructor_destructor: {
            title: "Constructor and Destructor in C++",
            html: `
                <h2>Constructor and Destructor in C++</h2>
                <p>Constructors and destructors are special member functions in C++ used to initialize and clean up objects respectively.</p>

                <h3>Constructor</h3>
                <p>A constructor is a special method that is automatically called when an object is created.</p>
                <ul>
                <li>Has the same name as the class</li>
                <li>Does not have a return type</li>
                <li>Can be overloaded</li>
                </ul>

                <h4>Types of Constructors</h4>
                <ul>
                <li><strong>Default Constructor:</strong> No parameters</li>
                <li><strong>Parameterized Constructor:</strong> Takes parameters</li>
                <li><strong>Copy Constructor:</strong> Copies another object</li>
                </ul>

                <h4>Default Constructor Example</h4>
                <pre><code>class Demo {
            public:
                Demo() {
                cout << "Default Constructor called!" << endl;
                }
            };</code></pre>

                <h4>Parameterized Constructor Example</h4>
                <pre><code>class Demo {
            int x;
            public:
                Demo(int val) {
                x = val;
                cout << "Value: " << x << endl;
                }
            };</code></pre>

                <h4>Copy Constructor Example</h4>
                <pre><code>class Demo {
            int x;
            public:
                Demo(int val) { x = val; }
                Demo(const Demo &obj) {
                x = obj.x;
                }
            };</code></pre>

                <h3>Destructor</h3>
                <p>A destructor is a special method that is automatically called when the object goes out of scope or is deleted.</p>
                <ul>
                <li>Same name as class but prefixed with a tilde <code>~</code></li>
                <li>Used to free resources</li>
                <li>Cannot be overloaded</li>
                </ul>

                <h4>Destructor Example</h4>
                <pre><code>class Demo {
            public:
                ~Demo() {
                cout << "Destructor called!" << endl;
                }
            };</code></pre>

                <h3>Full Example</h3>
                <pre><code>class Test {
            int a;
            public:
                Test() {
                a = 0;
                cout << "Constructor Called" << endl;
                }
                ~Test() {
                cout << "Destructor Called" << endl;
                }
            };

            int main() {
            Test obj;
            return 0;
            }</code></pre>

                <h3>Conclusion</h3>
                <p>Constructors are essential for initializing objects, and destructors are crucial for cleaning up. They automate object lifecycle management and improve code reliability.</p>
            `
        },
        polymorphism: {
            title: "Polymorphism in C++",
            html: `
                <h2>Polymorphism in C++</h2>
                <p>Polymorphism means "many forms". In C++, it allows the same interface to behave differently depending on the underlying object. It is one of the pillars of Object-Oriented Programming (OOP).</p>

                <h3>Types of Polymorphism</h3>
                <ul>
                <li><strong>Compile-time Polymorphism</strong> (Static Binding)</li>
                <li><strong>Run-time Polymorphism</strong> (Dynamic Binding)</li>
                </ul>

                <h3>1. Compile-Time Polymorphism</h3>
                <p>Achieved through <strong>function overloading</strong> and <strong>operator overloading</strong>.</p>

                <h4>Function Overloading Example</h4>
                <pre><code>class Print {
            public:
                void show(int i) {
                cout << "Integer: " << i << endl;
                }
                void show(double d) {
                cout << "Double: " << d << endl;
                }
            };</code></pre>

                <h4>Operator Overloading Example</h4>
                <pre><code>class Complex {
            int real, imag;
            public:
                Complex(int r, int i) : real(r), imag(i) {}
                Complex operator + (const Complex& c) {
                return Complex(real + c.real, imag + c.imag);
                }
            };</code></pre>

                <h3>2. Run-Time Polymorphism</h3>
                <p>Achieved using <strong>inheritance</strong> and <strong>virtual functions</strong>. A base class function is overridden in a derived class.</p>

                <h4>Example</h4>
                <pre><code>class Animal {
            public:
                virtual void sound() {
                cout << "Animal makes sound" << endl;
                }
            };

            class Dog : public Animal {
            public:
                void sound() override {
                cout << "Dog barks" << endl;
                }
            };

            int main() {
            Animal* a;
            Dog d;
            a = &d;
            a->sound();  // Output: Dog barks
            return 0;
            }</code></pre>

                <h3>Virtual Functions</h3>
                <ul>
                <li>Declared using the <code>virtual</code> keyword in base class</li>
                <li>Enable dynamic binding</li>
                <li>Must be overridden in derived class</li>
                </ul>

                <h3>Pure Virtual Functions & Abstract Classes</h3>
                <p>A class that contains a pure virtual function becomes an abstract class and cannot be instantiated directly.</p>
                <pre><code>class Shape {
            public:
                virtual void draw() = 0;  // Pure virtual function
            };</code></pre>

                <h3>Conclusion</h3>
                <p>Polymorphism makes C++ powerful for building flexible and extensible systems. It allows you to write generic code that works with different types of objects using a common interface.</p>
            `
        },
        virtual_functions: {
            title: "Virtual Functions in C++",
            html: `
                <h2>Virtual Functions in C++</h2>
                <p>Virtual functions allow derived classes to override methods from a base class and support <strong>runtime polymorphism</strong>.</p>

                <h3>Key Characteristics</h3>
                <ul>
                <li>Declared using the <code>virtual</code> keyword in the base class</li>
                <li>Implemented (overridden) in the derived class</li>
                <li>Called through a base class pointer or reference</li>
                <li>Supports dynamic binding (late binding)</li>
                </ul>

                <h3>Basic Example</h3>
                <pre><code>class Base {
            public:
                virtual void display() {
                cout << "Display from Base class" << endl;
                }
            };

            class Derived : public Base {
            public:
                void display() override {
                cout << "Display from Derived class" << endl;
                }
            };

            int main() {
            Base* ptr;
            Derived d;
            ptr = &d;
            ptr->display(); // Output: Display from Derived class
            return 0;
            }</code></pre>

                <h3>Why Use Virtual Functions?</h3>
                <ul>
                <li>To achieve polymorphism</li>
                <li>To allow flexibility and extensibility in object-oriented design</li>
                <li>Useful when working with base class pointers to derived objects</li>
                </ul>

                <h3>Virtual Function Table (V-Table)</h3>
                <p>C++ maintains a table (V-Table) internally which stores addresses of virtual functions. Each class with virtual functions has a V-Table, and each object has a pointer to it.</p>

                <h3>Pure Virtual Functions and Abstract Classes</h3>
                <p>A pure virtual function forces a derived class to override the function. A class containing at least one pure virtual function becomes an abstract class.</p>

                <pre><code>class Animal {
            public:
                virtual void makeSound() = 0; // Pure virtual
            };

            class Dog : public Animal {
            public:
                void makeSound() override {
                cout << "Woof!" << endl;
                }
            };</code></pre>

                <h3>Notes</h3>
                <ul>
                <li>Virtual functions must be accessed via pointers or references for polymorphism to work.</li>
                <li>Destructors in base classes should also be virtual if the class is intended to be inherited.</li>
                </ul>

                <h3>Virtual Destructor Example</h3>
                <pre><code>class Base {
            public:
                virtual ~Base() {
                cout << "Base destructor" << endl;
                }
            };

            class Derived : public Base {
            public:
                ~Derived() {
                cout << "Derived destructor" << endl;
                }
            };</code></pre>

                <h3>Conclusion</h3>
                <p>Virtual functions enable dynamic polymorphism in C++, allowing behavior to be determined at runtime, enhancing flexibility and reusability of code.</p>
            `
        },
        templates: {
            title: "Templates in C++",
            html: `
                <h2>Templates in C++</h2>
                <p>Templates are powerful features in C++ that allow you to write generic and reusable code. They enable functions and classes to operate with generic types, avoiding redundancy.</p>

                <h3>Types of Templates</h3>
                <ul>
                <li><strong>Function Templates</strong></li>
                <li><strong>Class Templates</strong></li>
                </ul>

                <h3>1. Function Templates</h3>
                <p>Used when a function performs the same operation on different data types.</p>

                <h4>Syntax:</h4>
                <pre><code>template &lt;typename T&gt;
            T max(T a, T b) {
            return (a > b) ? a : b;
            }</code></pre>

                <h4>Usage:</h4>
                <pre><code>int main() {
            cout << max(10, 20) << endl;        // Works with int
            cout << max(4.5, 7.3) << endl;      // Works with float
            cout << max('a', 'z') << endl;      // Works with char
            return 0;
            }</code></pre>

                <h3>2. Class Templates</h3>
                <p>Used when a class should work with different data types.</p>

                <h4>Example:</h4>
                <pre><code>template &lt;class T&gt;
            class Calculator {
            private:
                T num1, num2;
            public:
                Calculator(T a, T b) : num1(a), num2(b) {}
                T add() { return num1 + num2; }
                T multiply() { return num1 * num2; }
            };</code></pre>

                <h4>Usage:</h4>
                <pre><code>int main() {
            Calculator&lt;int&gt; intCalc(5, 3);
            cout << intCalc.add() << endl;        // Output: 8

            Calculator&lt;float&gt; floatCalc(2.5, 3.5);
            cout << floatCalc.multiply() << endl; // Output: 8.75
            return 0;
            }</code></pre>

                <h3>Template Specialization</h3>
                <p>You can specialize templates to provide specific implementations for particular data types.</p>

                <pre><code>template &lt;&gt;
            class Calculator&lt;char&gt; {
            // Custom implementation for char
            };</code></pre>

                <h3>Benefits of Templates</h3>
                <ul>
                <li>Write once, use for any type</li>
                <li>Improves code reusability</li>
                <li>Helps build type-independent classes/functions</li>
                </ul>

                <h3>Limitations</h3>
                <ul>
                <li>Error messages can be complex</li>
                <li>All code is generated at compile-time (can increase binary size)</li>
                </ul>

                <h3>Conclusion</h3>
                <p>Templates are essential for generic programming in C++. They enable flexibility and code reuse without sacrificing type safety.</p>
            `
        },
        abstraction: {
            title: "Abstraction in C++",
            html: `
                <h2>Abstraction in C++</h2>
                <p><strong>Abstraction</strong> is an object-oriented programming (OOP) concept that allows you to hide complex implementation details and show only the necessary features of an object.</p>
                <p>It helps reduce programming complexity and effort by focusing on what an object does instead of how it does it.</p>

                <h3>Real-Life Example</h3>
                <p>When you drive a car, you only need to know how to use the steering wheel, brake, and accelerator. You don’t need to understand the internal mechanics of the engine. This is abstraction.</p>

                <h3>Ways to Achieve Abstraction in C++</h3>
                <ul>
                <li>Using <strong>abstract classes</strong> (classes with at least one pure virtual function)</li>
                <li>Using <strong>interfaces</strong> (pure abstract classes)</li>
                </ul>

                <h3>Abstract Class Example</h3>
                <pre><code>class Animal {
            public:
                virtual void sound() = 0; // Pure virtual function
            };

            class Dog : public Animal {
            public:
                void sound() {
                cout << "Bark" << endl;
                }
            };

            int main() {
            Animal* a = new Dog();
            a->sound(); // Output: Bark
            return 0;
            }</code></pre>

                <h3>Explanation</h3>
                <ul>
                <li><code>Animal</code> is an abstract class because it has a pure virtual function <code>sound()</code>.</li>
                <li><code>Dog</code> provides the implementation for <code>sound()</code>.</li>
                <li>The abstract class provides an interface, and derived classes provide the implementation.</li>
                </ul>

                <h3>Benefits of Abstraction</h3>
                <ul>
                <li>Reduces complexity by hiding implementation details</li>
                <li>Improves code maintainability</li>
                <li>Supports scalability and flexibility</li>
                <li>Encourages code reusability and clean design</li>
                </ul>

                <h3>Conclusion</h3>
                <p>Abstraction is essential for writing clean, modular, and maintainable C++ programs. It separates interface from implementation, making code easier to understand and extend.</p>
            `
        },
        encapsulation: {
            title: "Encapsulation in C++",
            html: `
                <h2>Encapsulation in C++</h2>
                <p><strong>Encapsulation</strong> is an object-oriented programming (OOP) principle that binds data and the functions that operate on that data into a single unit, usually a class. It also restricts direct access to some components, which is a means of preventing accidental interference and misuse.</p>

                <h3>Why Encapsulation?</h3>
                <ul>
                <li>To protect data from unauthorized access</li>
                <li>To improve code modularity and readability</li>
                <li>To provide a controlled interface to the users of the class</li>
                </ul>

                <h3>How is Encapsulation Achieved in C++?</h3>
                <ul>
                <li>By using <code>private</code> and <code>protected</code> access modifiers to restrict access to class members</li>
                <li>Providing <code>public</code> getter and setter methods for accessing private data</li>
                </ul>

                <h3>Example:</h3>
                <pre><code>class Student {
            private:
                int age;
                string name;

            public:
                void setAge(int a) {
                if (a > 0) age = a;
                }

                void setName(string n) {
                name = n;
                }

                int getAge() {
                return age;
                }

                string getName() {
                return name;
                }
            };

            int main() {
            Student s;
            s.setName("John");
            s.setAge(20);

            cout << "Name: " << s.getName() << endl;
            cout << "Age: " << s.getAge() << endl;
            return 0;
            }</code></pre>

                <h3>Explanation:</h3>
                <ul>
                <li><code>name</code> and <code>age</code> are private, so they cannot be accessed directly from outside the class.</li>
                <li><code>setName()</code> and <code>setAge()</code> allow safe and validated data input.</li>
                <li><code>getName()</code> and <code>getAge()</code> provide controlled data access.</li>
                </ul>

                <h3>Advantages of Encapsulation</h3>
                <ul>
                <li>Protects internal state of the object</li>
                <li>Makes the class easier to maintain and modify</li>
                <li>Enhances security by restricting data access</li>
                <li>Improves modularity by separating internal details from interface</li>
                </ul>

                <h3>Conclusion</h3>
                <p>Encapsulation is vital for protecting object integrity and maintaining clean, organized, and secure code in C++. It allows for safe data manipulation and reduces system complexity.</p>
            `
        },
        exception_handling: {
            title: "Exception Handling in C++",
            html: `
                <h2>Exception Handling in C++</h2>
                <p><strong>Exception Handling</strong> is a mechanism to handle runtime errors in a graceful and controlled way without crashing the program.</p>
                <p>C++ provides built-in support for exception handling using three main keywords: <code>try</code>, <code>catch</code>, and <code>throw</code>.</p>

                <h3>Basic Syntax</h3>
                <pre><code>try {
            // Code that might throw an exception
            throw exception_type;
            } catch (exception_type e) {
            // Code to handle the exception
            }</code></pre>

                <h3>Example:</h3>
                <pre><code>#include &lt;iostream&gt;
            using namespace std;

            int main() {
            int x = 10, y = 0;
            try {
                if (y == 0)
                throw "Division by zero error!";
                cout << "Result: " << x / y << endl;
            } catch (const char* msg) {
                cout << "Exception caught: " << msg << endl;
            }
            return 0;
            }</code></pre>

                <h3>Output:</h3>
                <pre><code>Exception caught: Division by zero error!</code></pre>

                <h3>Multiple Catch Blocks</h3>
                <p>You can have multiple <code>catch</code> blocks for different exception types:</p>
                <pre><code>try {
            throw 10;
            } catch (int e) {
            cout << "Integer exception: " << e << endl;
            } catch (...) {
            cout << "Generic exception caught." << endl;
            }</code></pre>

                <h3>Standard Exceptions</h3>
                <p>C++ provides a standard library of exception classes under <code>&lt;stdexcept&gt;</code> like:</p>
                <ul>
                <li><code>std::overflow_error</code></li>
                <li><code>std::underflow_error</code></li>
                <li><code>std::runtime_error</code></li>
                <li><code>std::invalid_argument</code></li>
                </ul>

                <h3>Example with <code>std::exception</code>:</h3>
                <pre><code>#include &lt;stdexcept&gt;

            try {
            throw runtime_error("Something went wrong!");
            } catch (exception& e) {
            cout << "Caught exception: " << e.what() << endl;
            }</code></pre>

                <h3>Best Practices</h3>
                <ul>
                <li>Throw exceptions only for exceptional cases.</li>
                <li>Use specific exception types instead of generic ones.</li>
                <li>Don’t catch exceptions you can’t handle.</li>
                </ul>

                <h3>Conclusion</h3>
                <p>Exception handling is crucial for building robust C++ applications. It allows you to separate normal code from error-handling code and ensures a smooth user experience during runtime issues.</p>
            `
        },
        file_handling: {
            title: "File Handling in C++",
            html: `
                <h2>File Handling in C++</h2>
                <p>File handling allows a C++ program to create, read, write, and modify files. C++ provides a set of classes in the <code>&lt;fstream&gt;</code> header to handle file operations.</p>

                <h3>File Streams</h3>
                <ul>
                <li><code>ifstream</code> - For reading from a file</li>
                <li><code>ofstream</code> - For writing to a file</li>
                <li><code>fstream</code> - For both reading and writing</li>
                </ul>

                <h3>Including the Header</h3>
                <pre><code>#include &lt;fstream&gt;</code></pre>

                <h3>Writing to a File</h3>
                <pre><code>#include &lt;fstream&gt;
            using namespace std;

            int main() {
            ofstream file("example.txt");
            if (file.is_open()) {
                file &lt;&lt; "Hello, C++ file handling!";
                file.close();
            }
            return 0;
            }</code></pre>

                <h3>Reading from a File</h3>
                <pre><code>#include &lt;iostream&gt;
            #include &lt;fstream&gt;
            #include &lt;string&gt;
            using namespace std;

            int main() {
            ifstream file("example.txt");
            string line;
            if (file.is_open()) {
                while (getline(file, line)) {
                cout &lt;&lt; line &lt;&lt; endl;
                }
                file.close();
            }
            return 0;
            }</code></pre>

                <h3>Appending to a File</h3>
                <pre><code>ofstream file("example.txt", ios::app); // Append mode
            file &lt;&lt; "\\nThis will be appended!";</code></pre>

                <h3>Common File Modes</h3>
                <ul>
                <li><code>ios::in</code> – Read</li>
                <li><code>ios::out</code> – Write</li>
                <li><code>ios::app</code> – Append</li>
                <li><code>ios::trunc</code> – Truncate (delete contents)</li>
                <li><code>ios::binary</code> – Binary mode</li>
                </ul>

                <h3>Error Checking</h3>
                <pre><code>if (!file) {
            cout &lt;&lt; "File could not be opened!" &lt;&lt; endl;
            }</code></pre>

                <h3>Conclusion</h3>
                <p>File handling in C++ enables programs to interact with external files, making them more dynamic and useful. It is a powerful feature for creating logs, storing data, and persistent storage in general.</p>
            `
            },

        }
    },


};

export default tutorialData;