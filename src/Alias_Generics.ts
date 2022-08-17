//#############################################################################
//#                                 LES ALIAS                                 #
//#############################################################################

type User = { firstname: string; age: number };
const user: User = { firstname: "toto", age: 18 };

type Key = keyof User;
type Username = User["firstname"]

const person = {
  "firstname": "John",
  "lastname": "Doe",
  "age": 32
}

type Person = typeof person;

//#############################################################################
//#                                LES GENERICS                               #
//#############################################################################

function identity<ArgType>(arg:ArgType) : ArgType {
  return arg;
}

const aa = identity<number>(3)
// aa = ab
const ab = identity(3)


function first<Type>(arg: Type[]): Type {
  return arg[0]
}

const ac = first(["abc", "def", "ghi"])

const ad: Array<string | number> = (["abc", "def", 3])

type Identity<ArgTypes> = (arg: ArgTypes) => ArgTypes;