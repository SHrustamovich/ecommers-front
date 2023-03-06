import {
    ChangeEvent,
    FC,
    useCallback,
    useEffect,
    useState,
    useRef,
} from "react";
import { useSearchParams } from "react-router-dom";
import useLanguage from "../hooks/useLanguage";

interface MultiRangeSliderProps {
    min: number;
    max: number;
    onChange: Function;
}

export const MultiRange: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const min = 400;
    const max = 200000;
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minRef = useRef<HTMLInputElement>(null);
    const maxRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLInputElement>(null);

    const changeState = ({ min, max }: { min: number; max: number }) => {
        // setSearchParams({ minVal: min.toString(), maxVal: max.toString() });
    };

    const handlyChangeMin = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(+event.target.value, maxVal - 1);
            setMinVal(value);
            event.target.value = value.toString();
    };

    const handlyChangeMax = (event: ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(+event.target.value, minVal + 1);
        setMaxVal(value);
        event.target.value = value.toString();
    };

    const getPersent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        if (maxRef.current) {
            const minPercent = getPersent(minVal);
            const maxPercent = getPersent(+maxRef.current?.value);
            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [getPersent]);

    useEffect(() => {
        if (minRef.current) {
            const minPercent = getPersent(+minRef.current.value);
            const maxPercent = getPersent(maxVal);
            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [getPersent]);

    useEffect(() => {
        const timeChange = setTimeout(() => {
            changeState({ min: minVal, max: maxVal });
        }, 1000);
        return () => clearTimeout(timeChange);
    }, [changeState]);

    return (
        <div className='filter-input'>
            <input
                type='range'
                min={min}
                max={max}
                value={minVal}
                ref={minRef}
                step={100}
                onChange={handlyChangeMin}
                className='filter-price min'
            />
            <input
                type='range'
                min={min}
                max={max}
                value={maxVal}
                ref={maxRef}
                step={100}
                onChange={handlyChangeMax}
                className='filter-price min'
            />
            <div className='slider'>
                <div className='slider__track'></div>
                <div ref={range} className='slider__range'></div>
            </div>
        </div>
    );
};
