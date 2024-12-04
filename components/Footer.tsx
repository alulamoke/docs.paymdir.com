export const Footer = () => {
  return (
    <footer className="border-t bg-secondary p-4 flex items-center justify-center text-center">
      <p className="text-sm font-medium text-muted-foreground">
        Copyright © {new Date().getFullYear()} PayMdir PLC.
      </p>
    </footer>
  );
};
