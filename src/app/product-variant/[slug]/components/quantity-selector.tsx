"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDescrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Quantidade</h3>
      <div className="flex-items-center w-[100px] border justify-between rounded-lg">
        <Button size="icon" variant="ghost" onClick={handleDescrease}>
          <MinusIcon />
        </Button>
        <p>{quantity}</p>
        <Button size="icon" variant="ghost" onClick={handleIncrease}>
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};

export default QuantitySelector;
