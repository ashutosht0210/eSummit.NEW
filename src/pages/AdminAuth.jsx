import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "@/components/ui/PageHeader";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useTransitionNavigate } from "@/hooks/useTransitionNavigate";

const ADMIN_KEY = "octane2026";

export function AdminAuth() {
  const [key, setKey] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const transitionNavigate = useTransitionNavigate();

  useDocumentTitle("Admin Login — E-Summit 2026");

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      sessionStorage.getItem("admin_token")
    ) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const submit = (e) => {
    e.preventDefault();
    if (key === ADMIN_KEY) {
      const token = crypto.randomUUID();
      sessionStorage.setItem("admin_token", token);
      sessionStorage.setItem("admin_key", key);
      transitionNavigate("/admin/dashboard");
    } else {
      setErr("Invalid key. Try again.");
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center justify-center px-6 text-left">
      <div className="max-w-md w-full">
        <PageHeader
          tag="Restricted"
          title="Pit wall access."
          titleClassName="text-5xl sm:text-5xl md:text-5xl lg:text-5xl mb-2"
          className="mb-2"
        />
        <p className="text-muted-foreground mb-8 text-sm">
          Demo key: <span className="font-mono text-primary">octane2026</span>
        </p>
        <form onSubmit={submit} className="space-y-4">
          <Input
            type="password"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="Admin key"
            className="px-4 py-4"
          />
          {err && <div className="text-signal font-mono text-xs">{err}</div>}
          <Button type="submit" variant="primary" className="w-full py-4">
            Authenticate →
          </Button>
        </form>
      </div>
    </div>
  );
}
