export const validateAmount = (amount) => {
  if (amount.match(/^[0-9]\d*(\.\d+)?$/)) {
    if (amount.includes(".")) {
      if (amount.split(".")[1] && amount.split(".")[1].length > 2) {
        return true;
      }
    }
  } else {
    if (amount !== "") {
      return true;
    }
  }
  return false;
};

export const validateCustomTip = (tip) => {
  if (isNaN(tip) || tip.includes(".") || parseFloat(tip) > 100) {
    return true;
  }
  return false;
};

export const validatePeople = (people) => {
  if (isNaN(people) || people.includes(".") || parseFloat(people) <= 0) {
    return true;
  }
  return false;
};

export const hasInputError = (inputState) => {
  if (inputState.value === "" || inputState.hasError) {
    return true;
  }
};

export const hasTipError = (customTip, tip) => {
  if (tip === "") {
    if (customTip.value === "" || customTip.hasError) {
      return true;
    }
  }
};

export const calculatePerPersonAmountWithoutTip = (bill, people) => {
  return (parseFloat(bill) / parseFloat(people)).toFixed(2);
};

export const calculatePerPersonAmountWithTip = (bill, people, tip) => {
  let tipAmount = ((parseFloat(bill) * parseFloat(tip)) / 100).toFixed(2);
  return (
    (parseFloat(bill) + parseFloat(tipAmount)) /
    parseFloat(people)
  ).toFixed(2);
};

export const calculatePerPersonTip = (bill, people, tip) => {
  let tipAmount = ((parseFloat(bill) * tip) / 100).toFixed(2);
  return (parseFloat(tipAmount) / parseFloat(people)).toFixed(2);
};

export const calculator = (bill, people, tip, customTip) => {
  if (tip === "" && customTip.value === "") {
    let perPersonAmount = calculatePerPersonAmountWithoutTip(
      bill.value,
      people.value
    );
    return { billAmount: perPersonAmount, tipAmount: "0.00" };
  }
  if (tip) {
    let perPersonAmount = calculatePerPersonAmountWithTip(
      bill.value,
      people.value,
      tip
    );
    let perPersonTip = calculatePerPersonTip(bill.value, people.value, tip);
    return { billAmount: perPersonAmount, tipAmount: perPersonTip };
  }
  if (customTip.value !== "" && !customTip.hasError) {
    let perPersonAmount = calculatePerPersonAmountWithTip(
      bill.value,
      people.value,
      customTip.value
    );
    let perPersonTip = calculatePerPersonTip(
      bill.value,
      people.value,
      customTip.value
    );
    return { billAmount: perPersonAmount, tipAmount: perPersonTip };
  }
  return { billAmount: "0.00", tipAmount: "0.00" };
};
