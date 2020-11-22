import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
   it('Should display weak if strength is 5', () => {

    // Arrange
     const pipe = new StrengthPipe();

     // Act
     const value  = pipe.transform(5);

     // Assert
     expect (value).toEqual('5 (weak)');
   });

   it('Should display strong if strength is 10', () => {

    // Arrange
     const pipe = new StrengthPipe();

     // Act
     const value  = pipe.transform(10);

     // Assert
     expect (value).toEqual('10 (strong)');
   });
});
