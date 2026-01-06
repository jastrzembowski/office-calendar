import { SectionWrapper } from "../sectionWrapper";
import { Slot, SlotStatus } from "@/models";

import styles from "./styles.module.scss";

interface SlotSelectorProps {
  slots?: Slot[];
  selectedSlot?: Slot;
  onSelectSlot: (slot: Slot) => void;
}

export const SlotSelector = ({
  slots,
  selectedSlot,
  onSelectSlot,
}: SlotSelectorProps) => {

const filteredSlots = slots?.filter((slot) => slot.status === SlotStatus.AVAILABLE);

  return (
    <SectionWrapper title="Wybierz godzinę">
      <div className={styles.slots}>
        {filteredSlots?.length === 0 && (
          <p className={styles.noSlots}>Brak dostępnych godzin</p>
        )}
        {filteredSlots?.map((slot) => (
          <button
            key={slot.id}
            className={styles.slot}
            onClick={() => onSelectSlot(slot)}
            disabled={selectedSlot?.id === slot.id}
          >
            {slot.startTime}
          </button>
        ))}
      </div>
    </SectionWrapper>
  );
};
