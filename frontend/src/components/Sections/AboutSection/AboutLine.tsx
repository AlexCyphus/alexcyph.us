const AboutLine: React.FC = ({ children }) => (
  <p className="leading-8">
    {`${'>>'}`}
    {' '}
    {children}
  </p>
)

export default AboutLine
