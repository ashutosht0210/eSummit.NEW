import { useState } from "react";
import { PASSES } from "@/lib/store";
import { CheckoutModal } from "@/components/CheckoutModal";
import { OrderStatusModal } from "@/components/OrderStatusModal";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/Button";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const MAX = 5;

export function Buy() {
  const [cart, setCart] = useLocalStorage("es26_cart", []);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);

  useDocumentTitle("Get Your Pass — E-Summit 2026");

  const totalQty = cart.reduce((a, c) => a + c.qty, 0);
  const total = cart.reduce((a, c) => {
    const p = PASSES.find((pass) => pass.id === c.passId);
    return a + (p?.price ?? 0) * c.qty;
  }, 0);

  const update = (passId, delta) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.passId === passId);
      const currentTotal = prev.reduce((a, c) => a + c.qty, 0);
      let next;
      if (existing) {
        const newQty = Math.max(0, existing.qty + delta);
        if (delta > 0 && currentTotal >= MAX) return prev;
        next =
          newQty === 0
            ? prev.filter((c) => c.passId !== passId)
            : prev.map((c) =>
                c.passId === passId ? { ...c, qty: newQty } : c,
              );
      } else {
        if (delta <= 0 || currentTotal >= MAX) return prev;
        next = [...prev, { passId, qty: 1 }];
      }
      return next;
    });
  };

  return (
    <div className="pt-32 pb-24 text-left">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
          <PageHeader
            tag="Pit Lane"
            title={
              <>
                Choose
                <br />
                your seat.
              </>
            }
            className="mb-0"
          />
          <Button
            onClick={() => setStatusOpen(true)}
            variant="secondary"
            className="px-5 py-3"
          >
            Check order status →
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PASSES.map((p) => {
            const item = cart.find((c) => c.passId === p.id);
            const qty = item?.qty ?? 0;
            return (
              <div
                key={p.id}
                className={`border bg-card p-6 sm:p-8 flex flex-col ${
                  qty > 0 ? "border-primary" : "border-border"
                }`}
              >
                <div className="flex justify-between mb-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {p.id.toUpperCase()}
                  </span>
                  {p.soldOut && (
                    <span className="font-mono text-xs text-signal uppercase">
                      Sold out
                    </span>
                  )}
                </div>
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl leading-none">
                  {p.name}
                </h3>
                <div className="mt-6 font-display text-5xl sm:text-6xl text-primary">
                  ₹{p.price}
                </div>
                <ul className="mt-8 space-y-2 text-sm text-muted-foreground flex-1">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex gap-2">
                      <span className="text-primary">▸</span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                  <span className="font-mono text-xs uppercase tracking-widest">
                    Qty
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => update(p.id, -1)}
                      disabled={qty === 0}
                      className="w-10 h-10 border border-border hover:border-primary disabled:opacity-30 font-mono select-none"
                    >
                      −
                    </button>
                    <span className="font-display text-2xl w-8 text-center tabular-nums">
                      {qty}
                    </span>
                    <button
                      onClick={() => update(p.id, 1)}
                      disabled={p.soldOut || totalQty >= MAX}
                      className="w-10 h-10 border border-border hover:border-primary disabled:opacity-30 font-mono select-none"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {totalQty > 0 && (
          <div className="mt-12 sticky bottom-4 bg-card/90 backdrop-blur-md border border-primary p-4 sm:p-6 flex flex-wrap justify-between items-center gap-4 z-10 shadow-lg">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Order total ({totalQty} of {MAX} max)
              </div>
              <div className="font-display text-3xl sm:text-4xl text-primary mt-1">
                ₹{total}
              </div>
            </div>
            <Button
              onClick={() => setCheckoutOpen(true)}
              variant="primary"
              className="px-8 py-4"
            >
              Checkout →
            </Button>
          </div>
        )}
      </div>

      {checkoutOpen && (
        <CheckoutModal
          cart={cart}
          total={total}
          onClose={() => setCheckoutOpen(false)}
          onDone={() => {
            setCart([]);
            setCheckoutOpen(false);
          }}
        />
      )}
      {statusOpen && <OrderStatusModal onClose={() => setStatusOpen(false)} />}
    </div>
  );
}
