"use client";

import { useFormState, useFormStatus } from "react-dom";
import Headings from "../UI/Headings";
import { Select, SelectItem, Input } from "@nextui-org/react";
import { paymentsType } from "@/configs/paymentsType";
import { ukraineRegionsList } from "@/configs/ukraineRegionsList";

const initialState = {
  message: null,
};

function PlacingOrder() {
  // const [state, formAction] = useFormState(action, initialState);
  const { pending } = useFormStatus();

  return (
    <form
      // action={formAction}
      className="flex flex-col gap-10"
    >
      <fieldset className="flex gap-4">
        <legend className="mb-3 text-xl font-semibold">
          Ваші контактні дані
        </legend>

        <Input
          label="Мобільний телефон"
          type="tel"
          id="phone"
          name="phone"
          required
          variant="bordered"
          color="secondary"
        />

        <Input
          label="Ім'я"
          type="text"
          name="name"
          id="name"
          variant="bordered"
          color="secondary"
        />
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <legend className="mb-3 text-xl font-semibold">Доставка</legend>

        <Select
          placeholder="Оберіть область"
          aria-label="Оберіть область"
          variant="flat"
          color="secondary"
        >
          {ukraineRegionsList.map(({ name }) => (
            <SelectItem
              value={name}
              key={name}
              aria-label={name}
              color="secondary"
              variant="solid"
            >
              {name}
            </SelectItem>
          ))}
        </Select>

        <Input
          label="Місто"
          type="text"
          name="city"
          id="city"
          required
          variant="bordered"
          color="secondary"
        />

        <Input
          label="Номер відділення"
          type="text"
          name="postOfficeNumber"
          id="postOfficeNumber"
          required
          variant="bordered"
          color="secondary"
        />
      </fieldset>

      <fieldset>
        <legend className="mb-3 text-xl font-semibold">Оплата</legend>

        <Select
          placeholder="Оберіть тип оплати"
          aria-label="Оберіть тип оплати"
          variant="flat"
          color="secondary"
        >
          {paymentsType.map(payment => (
            <SelectItem
              value={payment.name}
              key={payment.maping}
              aria-label={payment.name}
              color="secondary"
              variant="solid"
            >
              {payment.name}
            </SelectItem>
          ))}
        </Select>
      </fieldset>

      <fieldset className="grid grid-cols-2 gap-4">
        <legend className="mb-3 text-xl font-semibold">Отримувач</legend>

        <Input
          label="Прізвище"
          type="text"
          name="recipientLastName"
          id="recipientLastName"
          required
          variant="bordered"
          color="secondary"
        />

        <Input
          label="Ім'я"
          type="text"
          name="recipientFirstName"
          id="recipientFirstName"
          required
          variant="bordered"
          color="secondary"
        />

        <Input
          label="По батькові"
          type="text"
          name="recipientSurnameName"
          id="recipientSurnameName"
          variant="bordered"
          color="secondary"
        />

        <Input
          label="Мобільний телефон"
          type="tel"
          id="recipientPhone"
          name="recipientPhone"
          required
          variant="bordered"
          color="secondary"
        />
      </fieldset>

      <button disabled={pending}>Оформити!</button>
    </form>
  );
}

export default PlacingOrder;
