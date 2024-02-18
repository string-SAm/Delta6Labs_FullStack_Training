// Define an enum called Direction

enum Direction {

    Up,
  
    Down,
  
    Left,
  
    Right
  
  }
   
  // You can also explicitly set the values of enum members
  
  enum CustomDirection {
  
    Up = "UP",
  
    Down = "DOWN",
  
    Left = "LEFT",
  
    Right = "RIGHT"
  
  }
   
  // Usage of the Direction enum
  
  let playerDirection: Direction = Direction.Up;
   
  // Enums can be used in switch-case statements
  
  switch (playerDirection) {
  
    case Direction.Up:
  
      console.log("Player is moving up");
  
      break;
  
    case Direction.Down:
  
      console.log("Player is moving down");
  
      break;
  
    case Direction.Left:
  
      console.log("Player is moving left");
  
      break;
  
    case Direction.Right:
  
      console.log("Player is moving right");
  
      break;
  
  }
   
  // Usage of the CustomDirection enum
  
  let customPlayerDirection: CustomDirection = CustomDirection.Down;
  
  console.log(customPlayerDirection + ""); // Output: "DOWN"
   
   