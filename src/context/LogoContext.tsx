import React, { createContext, useContext, useState, useEffect } from 'react';
import defaultLogoImage from '../assets/images/regenerated_image_1791661662486.png';

export interface LogoConfig {
  mode: 'vector' | 'custom-image';
  customImageUrl: string | null;
  primaryColor: string; // for Navy parts
  accentColor: string;  // for Cyan wave & star
  brandName: string;
  tagline: string;
  showTagline: boolean;
}

const DEFAULT_CONFIG: LogoConfig = {
  mode: 'custom-image',
  customImageUrl: defaultLogoImage,
  primaryColor: '#052652',
  accentColor: '#0082E6',
  brandName: 'Cleanzoe',
  tagline: 'On nettoie, vous respirez',
  showTagline: true,
};

interface LogoContextType {
  config: LogoConfig;
  setMode: (mode: 'vector' | 'custom-image') => void;
  setCustomImage: (dataUrl: string) => void;
  removeCustomImage: () => void;
  updateColors: (primary: string, accent: string) => void;
  updateTexts: (brandName: string, tagline: string, showTagline: boolean) => void;
  resetToDefault: () => void;
  isCustomizerOpen: boolean;
  openCustomizer: () => void;
  closeCustomizer: () => void;
}

const LogoContext = createContext<LogoContextType | undefined>(undefined);

const STORAGE_KEY = 'cleanzoe_logo_custom_config_v1';

export const LogoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<LogoConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error('Failed to load logo config', e);
    }
    return DEFAULT_CONFIG;
  });

  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    } catch (e) {
      console.error('Failed to save logo config', e);
    }
  }, [config]);

  const setMode = (mode: 'vector' | 'custom-image') => {
    setConfig((prev) => ({ ...prev, mode }));
  };

  const setCustomImage = (dataUrl: string) => {
    setConfig((prev) => ({
      ...prev,
      mode: 'custom-image',
      customImageUrl: dataUrl,
    }));
  };

  const removeCustomImage = () => {
    setConfig((prev) => ({
      ...prev,
      mode: 'vector',
      customImageUrl: null,
    }));
  };

  const updateColors = (primaryColor: string, accentColor: string) => {
    setConfig((prev) => ({ ...prev, primaryColor, accentColor }));
  };

  const updateTexts = (brandName: string, tagline: string, showTagline: boolean) => {
    setConfig((prev) => ({ ...prev, brandName, tagline, showTagline }));
  };

  const resetToDefault = () => {
    setConfig(DEFAULT_CONFIG);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // ignore
    }
  };

  return (
    <LogoContext.Provider
      value={{
        config,
        setMode,
        setCustomImage,
        removeCustomImage,
        updateColors,
        updateTexts,
        resetToDefault,
        isCustomizerOpen,
        openCustomizer: () => setIsCustomizerOpen(true),
        closeCustomizer: () => setIsCustomizerOpen(false),
      }}
    >
      {children}
    </LogoContext.Provider>
  );
};

export const useLogo = () => {
  const context = useContext(LogoContext);
  if (!context) {
    throw new Error('useLogo must be used within a LogoProvider');
  }
  return context;
};
