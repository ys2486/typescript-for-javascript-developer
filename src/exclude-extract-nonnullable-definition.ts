export {};

//Exclude定義
type MyExclude<T, U> = T extends U ? never : T;

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

//Exclude
type FunctionType = Exclude<SomeTypes, string | number>;
type NunFunctinoType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

type MyFunctionType = MyExclude<SomeTypes, string | number>;

//Extract
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

//Nonnullable
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
