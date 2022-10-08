export const mapperDictionaryToArray = (dictionary) =>  Object.entries(dictionary).map((c, index) => ({id: c[0], name: c[1], value: index}))
    