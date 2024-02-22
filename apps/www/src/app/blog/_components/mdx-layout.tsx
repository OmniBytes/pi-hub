interface MdxLayoutProps {
  children: React.ReactNode;
}

export function MdxLayout(props: MdxLayoutProps) {
  const { children } = props;

  // Create any shared layout or styles here
  return <div style={{ color: "blue" }}>{children}</div>;
}
