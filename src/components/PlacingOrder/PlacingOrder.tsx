"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "@/redux/selectors/cartSelectors";
import { loadCartItems } from "../../redux/slices/cartSlice";
import { AppDispatch } from "../../redux/store";
import { handlePlacingOrder } from "@/lib/handlePlacingOrder";

import { paymentsType } from "@/configs/paymentsType";
import { ukraineRegionsList } from "@/configs/ukraineRegionsList";

import {
  Select,
  SelectItem,
  Input,
  Tooltip,
  Textarea,
} from "@nextui-org/react";

const schema = z.object({
  phone: z.string().min(1, "Вкажіть Ваш мобільний телефон"),
  name: z.string().min(1, "Вкажіть Вашe ім'я"),
  region: z.string().min(1, "Оберіть область"),
  city: z.string().min(3, "Вкажіть місто"),
  postOfficeNumber: z.string().min(1, "Вкажіть номер відділення"),
  paymentType: z.string().min(1, "Оберіть тип оплати"),
  recipientLastName: z.string().min(1, "Вкажіть прізвище отримувача"),
  recipientFirstName: z.string().min(1, "Вкажіть ім'я отримувача"),
  recipientSurnameName: z.string().optional(),
  recipientPhone: z.string().min(1, "Вкажіть номер телефону отримувача"),
  comment: z.string().optional(),
});

export type OrderFormData = z.infer<typeof schema>;

function PlacingOrder() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(schema),
  });
  const dispatch: AppDispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  useEffect(() => {
    dispatch(loadCartItems());
  }, [dispatch]);

  const { user } = useUser();
  const userId = user?.id;

  const onSubmit = (data: OrderFormData) => {
    try {
      handlePlacingOrder(data, cartItems, totalPrice, userId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
      <fieldset className="flex gap-4">
        <legend className="mb-3 text-xl font-semibold">
          Ваші контактні дані
        </legend>

        <Tooltip
          content={errors.phone?.message}
          isOpen={!!errors.phone?.message}
          placement="top-start"
          color={errors.phone ? "danger" : "secondary"}
          showArrow
        >
          <Input
            {...register("phone")}
            label="Мобільний телефон"
            type="tel"
            id="phone"
            name="phone"
            variant="bordered"
            color="secondary"
          />
        </Tooltip>

        <Input
          {...register("name")}
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

        <Tooltip
          content={errors.region?.message}
          isOpen={!!errors.region?.message}
          color="danger"
          showArrow
        >
          <Select
            {...register("region")}
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
        </Tooltip>

        <Tooltip
          content={errors.city?.message}
          isOpen={!!errors.city?.message}
          placement="top-start"
          color="danger"
          showArrow
        >
          <Input
            {...register("city")}
            label="Місто"
            type="text"
            name="city"
            id="city"
            required
            variant="bordered"
            color="secondary"
          />
        </Tooltip>

        <Tooltip
          content={errors.postOfficeNumber?.message}
          isOpen={!!errors.postOfficeNumber?.message}
          placement="top-start"
          color="danger"
          showArrow
        >
          <Input
            {...register("postOfficeNumber")}
            label="Номер відділення"
            type="text"
            name="postOfficeNumber"
            id="postOfficeNumber"
            variant="bordered"
            color="secondary"
          />
        </Tooltip>
      </fieldset>

      <fieldset>
        <legend className="mb-3 text-xl font-semibold">Оплата</legend>

        <Tooltip
          content={errors.paymentType?.message}
          isOpen={!!errors.paymentType?.message}
          color="danger"
          showArrow
        >
          <Select
            {...register("paymentType")}
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
        </Tooltip>
      </fieldset>

      <fieldset className="grid grid-cols-2 gap-4">
        <legend className="mb-3 text-xl font-semibold">Отримувач</legend>

        <Tooltip
          content={errors.recipientLastName?.message}
          isOpen={!!errors.recipientLastName?.message}
          placement="top-start"
          color="danger"
          showArrow
        >
          <Input
            {...register("recipientLastName")}
            label="Прізвище"
            type="text"
            name="recipientLastName"
            id="recipientLastName"
            required
            variant="bordered"
            color="secondary"
          />
        </Tooltip>

        <Tooltip
          content={errors.recipientFirstName?.message}
          isOpen={!!errors.recipientFirstName?.message}
          placement="top-start"
          color="danger"
          showArrow
        >
          <Input
            {...register("recipientFirstName")}
            label="Ім'я"
            type="text"
            name="recipientFirstName"
            id="recipientFirstName"
            required
            variant="bordered"
            color="secondary"
          />
        </Tooltip>

        <Input
          {...register("recipientSurnameName")}
          label="По батькові"
          type="text"
          name="recipientSurnameName"
          id="recipientSurnameName"
          variant="bordered"
          color="secondary"
        />

        <Tooltip
          content={errors.recipientPhone?.message}
          isOpen={!!errors.recipientPhone?.message}
          placement="top-start"
          color="danger"
          showArrow
        >
          <Input
            {...register("recipientPhone")}
            label="Мобільний телефон"
            type="tel"
            id="recipientPhone"
            name="recipientPhone"
            required
            variant="bordered"
            color="secondary"
          />
        </Tooltip>
      </fieldset>

      <Textarea
        {...register("comment")}
        label="Коментар до замовлення"
        id="comment"
        name="comment"
        description="Тут Ви можете залишити коментар до замовлення. Це не обов'язково!"
        variant="bordered"
        color="secondary"
        minRows={2}
      />

      <button
        type="submit"
        className="w-fit px-4 py-2 text-lg font-semibold transition-all duration-300 rounded-md bg-amber-400 hover:bg-amber-500 text-lime-800 disabled:pointer-events-none disabled:opacity-50 self-center"
        data-testid="order-submit-button"
      >
        Замовлення підтверджую
      </button>
    </form>
  );
}

export default PlacingOrder;
