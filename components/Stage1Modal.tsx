"use client";

import { useState } from "react";
import { stage1Addons, Addon, calculateStage1Price } from "@/lib/data";

interface Stage1ModalProps {
  onClose: () => void;
  onSelect: (basePrice: number, selectedAddons: Addon[]) => void;
}

export default function Stage1Modal({ onClose, onSelect }: Stage1ModalProps) {
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);
  const basePrice = 299;

  const toggleAddon = (addon: Addon) => {
    setSelectedAddons((prev) => {
      const exists = prev.find((a) => a.id === addon.id);
      if (exists) {
        return prev.filter((a) => a.id !== addon.id);
      } else {
        return [...prev, addon];
      }
    });
  };

  const totalPrice = calculateStage1Price(selectedAddons);

  const handleAddToBooking = () => {
    onSelect(basePrice, selectedAddons);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md">
      <div className="bg-[#1A1A1A] rounded-lg shadow-xl w-full max-w-md max-h-[90vh] mx-4 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 flex-shrink-0">
          <h2 className="text-2xl font-bold text-white">
            Stage 1 (Zusatzoption auswählen)
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 text-3xl leading-none w-8 h-8 flex items-center justify-center"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 flex-1 overflow-y-auto">
          {/* Description */}
          <div className="mb-6 text-white text-sm leading-relaxed">
            <p>
              <span className="font-semibold">Stage 1 Softwareoptimierung</span>{" "}
              🚀 Mehr Leistung, besseres Ansprechverhalten und optimierte
              Effizienz. ➕
            </p>
          </div>

          {/* Selection Section */}
          <div className="space-y-3 mb-6">
            <label className="block text-sm font-medium text-white mb-2">
              Stage 1 (Zusatzoption auswählen)
            </label>

            {/* Base Package - Always Selected */}
            <div className="bg-[#D35400] bg-opacity-20 border border-[#D35400] rounded-lg p-3 flex items-center gap-3">
              <div className="w-5 h-5 bg-[#D35400] rounded flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-white font-medium">
                Stage 1 (Zusatzoption auswählen)
              </span>
            </div>

            {/* Add-ons List - With border and scrollable */}
            <div className="border border-white/15 rounded-lg overflow-hidden max-h-56 overflow-y-auto bg-[#262626]">
              {stage1Addons.map((addon) => {
                const isSelected = selectedAddons.some(
                  (a) => a.id === addon.id
                );
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon)}
                    className={`w-full text-left px-4 py-3 flex items-center justify-between transition-colors ${
                      isSelected ? "bg-[#262626]" : "hover:bg-[#262626]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                          isSelected
                            ? "bg-[#5e18eb] border-[#5e18eb]"
                            : "border-[#5e18eb]"
                        }`}
                      >
                        {isSelected && (
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-white">{addon.name}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-gray-400 font-medium">
                      +{addon.preisEUR} EUR
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Price Footer */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Geschätzter Preis</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">
                  ab {totalPrice} EUR
                </span>
              </div>
            </div>
          </div>

          {/* Add to Booking Button */}
          <button
            onClick={handleAddToBooking}
            className="w-full bg-[#5e18eb] hover:bg-[#5e18eb]/90 text-white py-3 rounded-lg font-bold transition-colors"
          >
            Zur Buchung hinzufügen
          </button>
        </div>
      </div>
    </div>
  );
}
