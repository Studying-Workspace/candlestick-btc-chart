import { render } from "@testing-library/react";
import DarkLightModeButton from "../components/DarkLightModeButton";
import { beforeAll, test } from "vitest";
import { screen } from "@testing-library/dom";
import { enumBooleanMember } from "@babel/types";


describe("test dark light theme button",() => {
    beforeAll(render(<DarkLightModeButton/>))
    it("renders in the UI",() => {
        const element = screen.getByTestId("buttons-container");
        expect(element).toBeInTheDocument()

    })
})