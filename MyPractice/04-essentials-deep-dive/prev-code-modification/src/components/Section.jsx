export default function Section({ title, children, ...props }) {
  // ...props it is props forwarding. But all the prop names should be valid attribute name for html as here section tag is assigned with those property that are passed as it is.
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
