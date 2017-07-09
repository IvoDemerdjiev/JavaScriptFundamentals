function NumberAsWords(args) {
    var number = parseInt(args[0]);
    var combine = "";
    if (number < 20) {
        switch (number) {
            case 1:
                combine += "One";
                break;
            case 2:
                combine += "Two";
                break;
            case 3:
                combine += "Three";
                break;
            case 4:
                combine += "Four";
                break;
            case 5:
                combine += "Five";
                break;
            case 6:
                combine += "Six";
                break;
            case 7:
                combine += "Seven";
                break;
            case 8:
                combine += "Eight";
                break;
            case 9:
                combine += "Nine";
                break;
            case 0:
                combine += "Zero";
                break;
            case 10:
                combine += "Ten";
                break;
            case 11:
                combine += "Eleven";
                break;
            case 12:
                combine += "Twelve";
                break;
            case 13:
                combine += "Thirteen";
                break;
            case 14:
                combine += "Fourteen";
                break;
            case 15:
                combine += "Fifteen";
                break;
            case 16:
                combine += "Sixteen";
                break;
            case 17:
                combine += "Seventeen";
                break;
            case 18:
                combine += "Eighteen";
                break;
            default:
                combine += "Nineteen";
                break;
        }
        console.log(combine);
    }
    if (number > 19 && number < 100) {
        switch (parseInt(number / 10)) {
            case 2:
                combine += "Twenty ";
                break;
            case 3:
                combine += "Thirty ";
                break;
            case 4:
                combine += "Fourty ";
                break;
            case 5:
                combine += "Fifty ";
                break;
            case 6:
                combine += "Sixty ";
                break;
            case 7:
                combine += "Seventy ";
                break;
            case 8:
                combine += "Eighty ";
                break;
            default:
                combine += "Ninety ";
                break;
        }
        number = number % 10;
        switch (number) {
            case 1:
                combine += "one";
                break;
            case 2:
                combine += "two";
                break;
            case 3:
                combine += "three";
                break;
            case 4:
                combine += "four";
                break;
            case 5:
                combine += "five";
                break;
            case 6:
                combine += "six";
                break;
            case 7:
                combine += "seven";
                break;
            case 8:
                combine += "eight";
                break;
            case 9:
                combine += "nine";
                break;
        }
        console.log(combine);
    }
    if (number > 99) {
        switch (parseInt(number / 100)) {
            case 1:
                combine += "One hundred";
                break;
            case 2:
                combine += "Two hundred";
                break;
            case 3:
                combine += "Three hundred";
                break;
            case 4:
                combine += "Four hundred";
                break;
            case 5:
                combine += "Five hundred";
                break;
            case 6:
                combine += "Six hundred";
                break;
            case 7:
                combine += "Seven hundred";
                break;
            case 8:
                combine += "Eight hundred";
                break;
            default:
                combine += "Nine hundred";
                break;
        }
        number = number % 100;
        if (number==0) {
              console.log(combine);
        }
        if (number  <19 && number!=0) {
          switch (number) {
              case 1:
                  combine += " and one";
                  break;
              case 2:
                  combine += " and two";
                  break;
              case 3:
                  combine += " and three";
                  break;
              case 4:
                  combine += " and four";
                  break;
              case 5:
                  combine += " and five";
                  break;
              case 6:
                  combine += " and six";
                  break;
              case 7:
                  combine += " and seven";
                  break;
              case 8:
                  combine += " and eight";
                  break;
              case 9 :
                  combine += " and nine";
                  break;
                  case 10:
                      combine += " and ten";
                      break;
                  case 11:
                      combine += " and eleven";
                      break;
                  case 12:
                      combine += " and twelve";
                      break;
                  case 13:
                      combine += " and thirteen";
                      break;
                  case 14:
                      combine += " and fourteen";
                      break;
                  case 15:
                      combine += " and fifteen";
                      break;
                  case 16:
                      combine += " and sixteen";
                      break;
                  case 17:
                      combine += " and seventeen";
                      break;
                  case 18:
                      combine += " and eighteen";
                      break;
                  default:
                      combine += " and nineteen";
                      break;
          }
          console.log(combine);
        }
        if (number > 19) {
            switch (parseInt(number / 10)) {
                case 2:
                    combine += " and twenty ";
                    break;
                case 3:
                    combine += " and thirty ";
                    break;
                case 4:
                    combine += " and forty ";
                    break;
                case 5:
                    combine += " and fifty ";
                    break;
                case 6:
                    combine += " and sixty ";
                    break;
                case 7:
                    combine += " and seventy ";
                    break;
                case 8:
                    combine += " and eighty ";
                    break;
                default:
                    combine += " and ninety ";
                    break;
            }
            number = number % 10;

            if (number != 0) {
                switch (number) {
                    case 1:
                        combine += "one";
                        break;
                    case 2:
                        combine += "two";
                        break;
                    case 3:
                        combine += "three";
                        break;
                    case 4:
                        combine += "four";
                        break;
                    case 5:
                        combine += "five";
                        break;
                    case 6:
                        combine += "six";
                        break;
                    case 7:
                        combine += "seven";
                        break;
                    case 8:
                        combine += "eight";
                        break;
                    default:
                        combine += "nine";
                        break;
                }
            }
            console.log(combine);
        }
    }
  }
    NumberAsWords(["989"])
