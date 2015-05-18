User stories for calculator...


1) When a user clicks on a number

  Given user has NOT pressed the decimal...
  Then that number should appear on the display

    Ex. User clicks any number

  Given a number is already displayed...
  Then the digits should be concatenated

    Ex. User presses 4 and then presses 5. Both of those numbers should be concatenated (5 added to the end of 4)

  Given that user HAS pressed on the decimal...
  Then that number should be concatenated at the end of the currently displayed number.

    Ex. User has already pressed the decimal button (4.), the next number pressed should be concatenated at the end of the first number (4)

  Given that user HAS a pending operation...
  Then that operator should operate on the displayed number and the number just pressed. The number just pressed should be displayed.

   Ex. 8*9
    8 is displayed and the X button has been pressed. The operator should then operate on the next number pressed (9), and 9 should be displayed.


2) When I click on an arithmetic operator...

  Given user HAS NOT pressed the decimal...
  Then it should queue the indicated operation to operate on the number that is displayed and the number about to be clicked. And it should display any queued calculation

    Ex. User presses 4 and the + operator. The operator should operate on the next number pressed, then display the right calculation.


3) When I click on clear...
  Then all queued operations and calculations are cleared
  And the display is reset to zero


4) When I click on the equal sign...
  Then queued operations are calculated
  And the display is set to the calculation
