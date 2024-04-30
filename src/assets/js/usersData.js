import { faker } from "@faker-js/faker";

export default function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    userName: faker.internet.userName(),
    userAddress: faker.location.streetAddress(),
    userPhoneNumber: faker.phone.number(),
  };
}
