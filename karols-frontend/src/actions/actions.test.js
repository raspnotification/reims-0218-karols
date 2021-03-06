import {
  CHOOSE_SHOP,
  makeChooseShop,
  CHOOSE_SERVICE,
  makeChooseService,
  CHOOSE_SEX,
  makeChooseSex,
  CHOOSE_TIMESLOT,
  makeChooseSlotReservation,
  CHOOSE_PRESTATION,
  makeChoosePrestation,
  SUCCESS_RESERVATION,
  makeSuccessReservation,
  INCREMENT_SEX,
  makeIncrementSex,
  DECREMENT_SEX,
  makeDecrementSex,
  INCREMENT_PRESTATION,
  makeIncrementPrestation,
  DECREMENT_PRESTATION,
  makeDecrementPrestation,
  INCREMENT_TABLE,
  makeIncrementTable,
  DECREMENT_TABLE,
  makeDecrementTable
} from "./actions"
// import des actions et actions creator pour faire des testes

describe("action to choose a prestation", () => {
  // décrire l'action qui choisit la prestation
  it("should return an choice of a prestation with a prestation id", () => {
    // il devrait retourner le choix d'une prestation avec une Id prestation
    const expected = {
      type: CHOOSE_PRESTATION,
      preparationId: 4,
      prestationId: 2
      // déclaration d'une variable expected qui prend un object
    }
    expect(makeChoosePrestation(2, 4)).toEqual(expected)
    //le resultat attendu
  })
})

describe("action success reservation", () => {
  it("should return an action SUCCESS_RESERVATION", () => {
    const expected = {
      type: SUCCESS_RESERVATION
    }
    expect(makeSuccessReservation()).toEqual(expected)
  })
})

describe("action add slot creator", () => {
  it("should return an action CHOOSE_TIMESLOT WITH TIME", () => {
    const expected = {
      type: CHOOSE_TIMESLOT,
      timeSlot: { year: 2018, month: 4, day: 24, hour: 12 }
    }
    expect(
      makeChooseSlotReservation({ year: 2018, month: 4, day: 24, hour: 12 })
    ).toEqual(expected)
  })
})

describe("action choose sex creator", () => {
  it("should return M gender", () => {
    const expectedForMale = {
      type: CHOOSE_SEX,
      sex: "M"
    }

    expect(makeChooseSex("M")).toEqual(expectedForMale)
  })

  it("should return F gender", () => {
    const expectedForFemale = {
      type: CHOOSE_SEX,
      sex: "F"
    }
    expect(makeChooseSex("F")).toEqual(expectedForFemale)
  })
})

describe("action choose service creator", () => {
  it("should return an CHOOSE_SERVICE action with serviceId", () => {
    const expected = {
      type: CHOOSE_SERVICE,
      serviceId: 1
    }

    expect(makeChooseService(1)).toEqual(expected)
  })
})

describe("action selected shop", () => {
  it("should return an CHOOSE_SHOP action", () => {
    const expected = {
      type: CHOOSE_SHOP,
      shopId: 1
    }

    expect(makeChooseShop(1)).toEqual(expected)
  })
})

describe("action increment count table", () => {
  it("should return a count table +1", () => {
    const expected = {
      type: INCREMENT_TABLE
    }
    expect(makeIncrementTable()).toEqual(expected)
  })
})

describe("action decrement count table", () => {
  it("should return a count table -1", () => {
    const expected = {
      type: DECREMENT_TABLE
    }
    expect(makeDecrementTable()).toEqual(expected)
  })
})

describe("action increment sex", () => {
  it("should return a count sex +1", () => {
    const expected = {
      type: INCREMENT_SEX,
      sex: "M"
    }
    expect(makeIncrementSex("M")).toEqual(expected)
  })
})

describe("action decrement sex", () => {
  it("should return a count sex -1", () => {
    const expected = {
      type: DECREMENT_SEX,
      sex: "M"
    }
    expect(makeDecrementSex("M")).toEqual(expected)
  })
})

describe("action to increment prestation", () => {
  it("should return a count increment prestation with a prestation id", () => {
    const expected = {
      type: INCREMENT_PRESTATION,
      preparationId: 4,
      prestationId: 2
    }
    expect(makeIncrementPrestation(2, 4)).toEqual(expected)
  })
})

describe("action to decrement prestation", () => {
  it("should return a count decrement prestation with a prestation id", () => {
    const expected = {
      type: DECREMENT_PRESTATION,
      preparationId: 4,
      prestationId: 2
    }
    expect(makeDecrementPrestation(2, 4)).toEqual(expected)
  })
})
