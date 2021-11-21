// Array
type numArray = Array<string>;

// last
const last = <Type>(arr: Type[]) => arr[arr.length - 1];

const l = last([1, 2, 3]);
const l2 = last<string>(['a', 'b', 'c']);

// makeArr: 2 generics, return, overwrite interence, default value
const makeArr = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];

const v = makeArr(5, 6);
const v2 = makeArr('a', 'b');
const v3 = makeArr<string | null, number>('a', 5);

// addFullName: extends
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => ({
  ...obj,
  fullName: `${obj.firstName} ${obj.lastName}`,
});

const v4 = makeFullName({ firstName: 'bob', lastName: 'junior', age: 15 });

// interfaces
interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;
