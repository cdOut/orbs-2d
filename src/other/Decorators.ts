
// Dekoratory (metody oraz klasy)

export function Log(target: any, name: string, descriptor: any){
  var originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
      var result = originalMethod.apply(this, args);
      console.log(`Executed function: ${name}. New orbs successfully generated!`);
      return result;
  }
}

export function Test(target : any) {
    target.prototype.decoratorValue = 'TK4ID1 | Made using a decorator ;)';
    console.log(target.prototype.decoratorValue);
};