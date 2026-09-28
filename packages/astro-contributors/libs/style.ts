export function getStyleVariables(
  variables: Record<`--${string}`, string | undefined>
) {
  const definedVariables = Object.entries(variables).filter(isDefinedVariable);

  return definedVariables.length > 0
    ? Object.fromEntries(definedVariables)
    : undefined;
}

function isDefinedVariable(
  entry: [string, string | undefined]
): entry is [string, string] {
  return typeof entry[1] === "string" && entry[1].length > 0;
}
