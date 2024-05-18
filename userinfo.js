function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
      throw new Error("Input arrays must have the same length");
    }
  
    const userProfiles = [];
    let id = 1;
    for (let i = 0; i < names.length; i++) {
      userProfiles.push({
        originalName: names[i],
        modifiedName: modifiedNames[i],
        id: id++,
      });
    }
    return userProfiles
  }