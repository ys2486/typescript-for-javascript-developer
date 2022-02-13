export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>;
type NunFunctinoType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

//Extract
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

//Nonnullable
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
