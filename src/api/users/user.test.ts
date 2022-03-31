jest.mock("./user.service.ts");

import supertest from "supertest";
import startApp from "../app";
import * as UserService from "./user.service";

let restClient: any; // TODO no any

beforeAll(async () => {
	restClient = supertest(startApp());
});
