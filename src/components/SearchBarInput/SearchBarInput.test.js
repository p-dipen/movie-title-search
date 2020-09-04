import React from "react";
import { mount } from "enzyme";
import SearchBarInput from ".";

describe("<SearchBarInput /> Component", () => {
  it("SearchBarCity() should be return true value", () => {
    const submitInput = jest.fn();
    const changeFunc = jest.fn();
    const wrapper = mount(
      <SearchBarInput submit={submitInput} change={changeFunc} value="test" />
    );
    const input = wrapper.find("input");
    const form = wrapper.find("form");
    input.simulate("change");
    expect(changeFunc).toHaveBeenCalled();
    form.simulate("submit");
    expect(submitInput).toHaveBeenCalled();
  });
});
