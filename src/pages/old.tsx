export default function () {
  return (
    <section>
      <div>OLD PAGE</div>

      <br />
      <br />
      <br />

      <host-element>
        <template shadowroot="open">
          <slot></slot>
        </template>
        This is light dom content
      </host-element>
    </section>
  );
}
