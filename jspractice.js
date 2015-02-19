// QUESTION 1
            function doubleString(s) {
                // Takes in a string and returns a string with the same thing twice.
                // Example:
                // >>> doubleString("hello")
                // "hellohello"

                return s+s// YOUR CODE HERE
            }

            // QUESTION 2
            function firstThree(arr) {
                // Takes in an array and returns a string of the first three items in the
                // array, with commas in between.
                // Example:
                // >>> firstThree(["a", "b", "c", "d"])
                // "a,b,c"

                return  arr[0]+","+arr[1]+","+arr[2]// YOUR CODE HERE
                        
            }

            // QUESTION 3
            function bigOrSmall(n) {
                // Takes in a number and returns a string with that number, prefixed by
                // either "big" or "small". ("big" if the number is greater than 10, and
                // "small" otherwise)
                // Examples:
                // >>> bigOrSmall(3)
                // "small3"
                // >>> bigOrSmall(15)
                // "big15"
                // >>> bigOrSmall(-2)
                // "small-2"

                // YOUR CODE HERE
                if (n <= 10) {
                    return "small" + n;
                }
                return "big" + n;

            }

            // QUESTION 4
            function sumOfFirstNSquares1(n) {
                // Returns the sum of the first n squares. Use a while loop!
                // Example:
                // >>> sumOfFirstNSquares1(3)
                // 14

                // YOUR CODE HERE
                var total = 0;
                while (n){
                    total+= Math.pow(n, 2);
                    n--;
                }
                return total;
            }

            // QUESTION 5
            function sumOfFirstNSquares2(n) {
                // Same as above, but use a for loop!

                // YOUR CODE HERE
                var total = 0;
                for(;n > 0; n--){
                    total += n*n;
                }
                return total;
            }

            // You can ignore the stuff below.


            function displayText(text) {
                console.log(text);
            }

            var questionNum = 1;
            function question(expected, result) {
                displayText("Q" + questionNum + ". Result should be " +
                            expected + ". Result: " + result);
                questionNum++;
            }

            var numberNames = ["one", "two", "three", "four", "five"];

            question("abcabc", doubleString("abc"));
            question("one,two,three", firstThree(numberNames));
            question("big12,small5", bigOrSmall(12) + "," + bigOrSmall(5));
            question(30, sumOfFirstNSquares1(4));
            question(30, sumOfFirstNSquares2(4));