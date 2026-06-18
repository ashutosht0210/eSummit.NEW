export function Footer() {
  return (
    <footer className="border-t border-border bg-asphalt mt-32">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 py-16 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="font-display text-6xl md:text-7xl leading-none">
            E-SUMMIT
            <br />
            <span className="text-primary">2026</span>
          </div>
          <p className="mt-6 text-muted-foreground max-w-sm">
            India's flagship entrepreneurship summit. This year, we shift gears
            — into the future of motion.
          </p>
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            Venue
          </div>
          <p className="text-sm text-muted-foreground">
            IIT Dharwad
            <br />
            Karnataka, India
            <br />
            March 6–8, 2026
          </p>
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            Contact
          </div>
          <p className="text-sm text-muted-foreground">
            esummit@iitdh.ac.in
            <br />
            +91 98765 43210
          </p>
          <div className="flex gap-4 mt-4 font-mono text-xs">
            <a href="#" className="hover:text-primary">
              IG
            </a>
            <a href="#" className="hover:text-primary">
              X
            </a>
            <a href="#" className="hover:text-primary">
              LI
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 px-6 lg:px-12 flex justify-between font-mono text-xs text-muted-foreground">
        <span>© 2026 IIC, IIT Dharwad</span>
        <span>Built for speed.</span>
      </div>
    </footer>
  );
}
