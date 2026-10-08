export function SectionTitle({ children, sub, dark }) {
  return (
    <div className="mb-12">
      <h2 className="clip-tab inline-block bg-brand-orange py-3 pl-6 pr-14 text-2xl font-extrabold text-navy sm:text-3xl">
        {children}
      </h2>
      {sub && (
        <p className={`mt-5 max-w-xl leading-relaxed ${dark ? 'text-white/75' : 'text-navy/70'}`}>
          {sub}
        </p>
      )}
    </div>
  )
}
