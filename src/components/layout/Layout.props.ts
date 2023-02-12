export interface LayoutProps {
  children: (
    setTheme?: (propTheme: 'light' | 'dark') => void
  ) => React.ReactNode
}
